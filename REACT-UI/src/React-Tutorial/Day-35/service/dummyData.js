import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/products',
        }),
        getProductsById: builder.query({
            query: (id) => `/products/${id}`
        }),
        // add data
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/products/add',
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: newProduct,
            })
        }),
        // Updating Content
        updateProduct: builder.mutation({
            query: ({ id, updatedProduct }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                headers: { 'Content-Type': "application/json" },
                body: updatedProduct
            })
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            })
        }),
    }),
});

// Corrected the export name
export const {
    useGetAllProductsQuery,
    useGetProductsByIdQuery,
    useAddNewProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;
