import { createApi, fetchBaseQuery, BaseQueryFn, FetchBaseQueryError, FetchArgs } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../app/store";
import { setToastMessage } from "@/features/toastSlice";
import { typeToastEnum } from "@/enums/typeToastEnum";
import { IToast } from "@/interface/IToast";
import { logout } from "@/features/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_localhostApi,
    prepareHeaders: (headers, { getState }) => {
        const state: RootState = getState() as RootState;
        const token = state.auth.session?.token;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithCustomErrorHandling: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    // ۱. مدیریت خطاهای شبکه و HTTP (مثل 500, 400, 404)
    if (result.error) {
        const errorData = result.error.data as any;

        if (result.error.status === 401) {
            api.dispatch(logout());
        }

        // اگر سرور متنی برای خطا فرستاده باشد، همان را نشان بده، در غیر این صورت پیام پیش‌فرض
        const errorMessage = result.error.status === 401
            ? "نشست شما منقضی شده است؛ لطفاً دوباره وارد شوید."
            : result.error.status === 403
                ? "شما اجازه انجام این عملیات را ندارید."
                : errorData?.message || errorData?.title || "خطایی در ارتباط با سرور رخ داد";

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
