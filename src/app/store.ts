import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import filterReducer from "../features/filterSlice";
import viewportReducer  from "@/features/viewportSlice";
import { authApiSlice } from "../api/authApiSlice";
import { productApiSlice } from "@/api/productApiSlice";
import toastReducer from "@/features/toastSlice";
import { apiSlice } from "@/api/apiSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        filter: filterReducer,
        toast: toastReducer,
        viewport: viewportReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        // [authApiSlice.reducerPath]: authApiSlice.reducer,
        // [productApiSlice.reducerPath]: productApiSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    //     .concat(authApiSlice.middleware)
    //     .concat(productApiSlice.middleware)
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;