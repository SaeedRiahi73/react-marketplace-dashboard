// import { createApi, fetchBaseQuery, BaseQueryFn, FetchBaseQueryError, FetchArgs } from "@reduxjs/toolkit/query/react";
// import type { RootState } from "../app/store"; // Import RootState for type safety
// import { IApiResponseLogin, IUserlogin } from "../interface/Ilogin";
// import { logout } from "../features/authSlice";


// const baseQuery = fetchBaseQuery({
//     // baseUrl: import.meta.env.VITE_BASE_URL_Auth,
//     baseUrl: import.meta.env.VITE_BASE_URL_localhostApi,
//     prepareHeaders: (headers, { getState }) => {
//          console.log("headers :"+headers);
         
//         const state: RootState = getState() as RootState;
//         const token = state.auth.token;

//         if (token)
//             headers.set("Authorization", `Bearer ${token}`)

//         headers.set('Content-Type', 'application/json');
//         return headers;
//     }
// })
// // این برای هندل کردن ارور خوبه
// const baseQueryWithInterceptor: BaseQueryFn<
//     string | FetchArgs, // `args` type: URL or fetch arguments
//     unknown,                    // `result` type: The expected response type
//     FetchBaseQueryError         // `error` type: The error format for `fetchBaseQuery`
// > = async (args, api, extraOptions) => {
//     const result = await baseQuery(args, api, extraOptions);

//     if (result.error && result.error.status === 401) {
//         api.dispatch(logout());
//     }

//     return result;
// };

// export const authApiSlice = createApi({
//     reducerPath: "authApi",
//     baseQuery: baseQueryWithInterceptor,

//     // این برای زمانی خوب هست که برای تغییر با اضافه کردن به هدر عالی هست
//     // baseQuery: fetchBaseQuery({
//     //     baseUrl: "https://taskapi.agtan.ir",
//     //     prepareHeaders: (headers, { getState }) => {
//     //         const state = getState() as RootState;
//     //         const token = state.auth.token;

//     //         if (token) {
//     //             headers.set("Authorization", `Bearer ${token}`);
//     //         }

//     //         headers.set('Content-Type', 'application/json');
//     //         return headers;
//     //     },
//     // }),
//     tagTypes: ["BLOG", "USER"],
//     endpoints: (builder) => ({
//         login: builder.mutation<IApiResponseLogin, IUserlogin>({
//             query: (userLogin) => ({
//                 url: "/api/Auth/login",
//                 method: "POST",
//                 body: userLogin,
//             }),
//         }),
//     }),
// });

// export const { useLoginMutation } = authApiSlice;


import { apiSlice } from "./apiSlice";
import { IApiResponseLogin, IUserlogin } from "../interface/Ilogin";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<IApiResponseLogin, IUserlogin>({
            query: (userLogin) => ({
                url: "/api/Auth/login",
                method: "POST",
                body: userLogin,
            }),
        }),
        demoLogin: builder.mutation<IApiResponseLogin, void>({
            query: () => ({
                url: "/api/Auth/DemoLogin",
                method: "POST",
            }),
        }),
    }),
});

export const { useLoginMutation, useDemoLoginMutation } = authApiSlice;
