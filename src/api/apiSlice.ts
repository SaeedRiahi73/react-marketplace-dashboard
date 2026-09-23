import { createApi, fetchBaseQuery, BaseQueryFn, FetchBaseQueryError, FetchArgs } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../app/store";
import { setToastMessage } from "@/features/toastSlice";
import { typeToastEnum } from "@/enums/typeToastEnum";
import { IToast } from "@/interface/IToast";
import { logout, setSession } from "@/features/authSlice";
import { IAuthResponse } from "@/interface/IAuth";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_localhostApi,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const state: RootState = getState() as RootState;
        const token = state.auth.session?.token;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

let refreshPromise: Promise<boolean> | null = null;

const baseQueryWithCustomErrorHandling: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const tokenBeforeRequest = (api.getState() as RootState).auth.session?.token;
    let result = await baseQuery(args, api, extraOptions);
    const requestUrl = typeof args === "string" ? args : args.url;
    const isAuthRequest = requestUrl.startsWith("/api/Auth/");
    const isRefreshRequest = requestUrl === "/api/Auth/refresh-token";

    if (result.error?.status === 401 && !isAuthRequest) {
        const currentToken = (api.getState() as RootState).auth.session?.token;

        if (tokenBeforeRequest && currentToken && tokenBeforeRequest !== currentToken) {
            result = await baseQuery(args, api, extraOptions);
        }
    }

    if (result.error?.status === 401 && !isAuthRequest) {
        if (!refreshPromise) {
            refreshPromise = (async () => {
                const refreshResult = await baseQuery(
                    {
                        url: "/api/Auth/refresh-token",
                        method: "POST",
                    },
                    api,
                    extraOptions,
                );

                if (refreshResult.data) {
                    const refreshResponse = refreshResult.data as IAuthResponse;

                    if (refreshResponse.isSuccess && refreshResponse.data) {
                        api.dispatch(setSession(refreshResponse.data));
                        return true;
                    }
                }

                return false;
            })().finally(() => {
                refreshPromise = null;
            });
        }

        const refreshSucceeded = await refreshPromise;

        if (refreshSucceeded) {
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }

    // ۱. مدیریت خطاهای شبکه و HTTP (مثل 500, 400, 404)
    if (result.error && !isRefreshRequest) {
        const errorData = result.error.data as any;
        const firstApiError = Array.isArray(errorData?.errors)
            ? errorData.errors.find((error: unknown) => typeof error === "string")
            : undefined;

        if (result.error.status === 401) {
            api.dispatch(logout());
        }

        // اگر سرور متنی برای خطا فرستاده باشد، همان را نشان بده، در غیر این صورت پیام پیش‌فرض
        const errorMessage = result.error.status === 401
            ? "زمان دسترسی شما به پایان رسیده است. لطفاً دوباره وارد شوید."
            : result.error.status === 403
                ? "شما اجازه انجام این عملیات را ندارید."
                : firstApiError || errorData?.message || errorData?.title || "خطایی در ارتباط با سرور رخ داد";

        const toast: IToast = {
            status: typeToastEnum.error,
            message: errorMessage
        }

        api.dispatch(setToastMessage(toast));
    }

    // ۲. مدیریت خطاهایی که کد 200 دارند اما inside ResultInfo مقدار isSuccess = false است
    else if (result.data) {
        const res = result.data as any;
        if (res.isSuccess === false) {
            const serverMessage = res.message || "عملیات با خطا مواجه شد";
            const toast: IToast = {
                status: typeToastEnum.error,
                message: serverMessage
            }
            api.dispatch(setToastMessage(toast));
        }
    }

    return result;
};

// const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
//     const result = await baseQuery(args, api, extraOptions);

//     if (result.error && result.error.status === 401) {
//         api.dispatch(logout());
//     }

//     return result;
// };

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithCustomErrorHandling,
    tagTypes: ["BLOG", "USER", "products"],
    endpoints: () => ({}),
});
