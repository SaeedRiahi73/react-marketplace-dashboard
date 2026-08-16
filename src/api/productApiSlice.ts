import { IResultInfo } from "@/interface/IResultInfo";
import { apiSlice } from "./apiSlice";
import { IAddProduct, IProduct } from "@/interface/IProduct";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query<IProduct[], void>({
            query: () => "/api/Products/GetAllProduct",
            transformResponse: (response: IResultInfo<IProduct[]>) => response.data,
            providesTags: (result) =>
                result
                    ? [
                        { type: "products", id: "LIST" },
                        ...result.map(({ id }) => ({ type: "products" as const, id })),
                    ]
                    : [{ type: "products", id: "LIST" }],
        }),
        getProductById: builder.query<IProduct, string | number>({
            query: (id) => `/api/Products/GetProduct/${id}`,
            transformResponse: (response: IResultInfo<IProduct>) => response.data,
            providesTags: (_result, _error, arg) => [{ type: "products", id: arg }],
        }),
        addProduct: builder.mutation<IProduct, FormData | IAddProduct>({
            query: (product) => ({
                url: "/api/Products/CreateProduct",
                method: "POST",
                body: product,
            }),
            invalidatesTags: [{ type: "products", id: "LIST" }],
        }),
        editProduct: builder.mutation<
            IProduct,
            { id: string; data: FormData }
        >({
            query: ({ data }) => ({
                url: "/api/Products/UpdateProduct",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: "products", id },
                { type: "products", id: "LIST" },
            ],
        }),
        deleteProduct: builder.mutation<void, string>({
            query: (id) => ({
                url: `/api/Products/DeleteProduct/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (_result, _error, id) => [
                { type: "products", id },
                { type: "products", id: "LIST" },
            ],
        }),
    }),
});

export const {
    useGetProductQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useEditProductMutation,
    useDeleteProductMutation,
} = productApiSlice;
