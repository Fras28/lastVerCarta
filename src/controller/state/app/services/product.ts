import { api } from './api';
import { Method } from './methods';

export type Product = {
    id?: string;
    name: string;
    price?: number;
    section: string;
    description?: string;
    available: boolean;
    image?: string;
};
export interface ApiProduct {
    id: string;
    name: string;
    price?: number;
    section: { name: string };
    description?: string;
    available: boolean;
    image?: string;
}

const product = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => ({
                url: 'product',
                method: Method.GET,
            }),
            transformResponse: (response: ApiProduct[], meta, arg) => {
                const normalizeOperation = response.map((d) => ({
                    id: d.id,
                    name: d.name,
                    price: d.price,
                    section: d.section.name,
                    description: d.description,
                    available: d.available,
                    image: d.image,
                }));

                return normalizeOperation;
            },
            providesTags: ['Products'],
        }),
        getProduct: builder.query<Product, void>({
            query: (id) => ({
                url: `product/${id}`,
                method: Method.GET,
            }),
            providesTags: ['Products'],
        }),
        addProduct: builder.mutation<Product, Partial<Product>>({
            query: (body) => ({
                url: 'product',
                method: Method.POST,
                body,
            }),
            invalidatesTags: ['Products'],
        }),
        updateProduct: builder.mutation<Product, Partial<Product> & Pick<Product, 'id'>>({
            query: ({ id, ...body }) => ({
                url: `product/${id}`,
                method: Method.PATCH,
                body,
            }),
            invalidatesTags: ['Products'],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `product/${id}`,
                method: Method.DELETE,
            }),
            invalidatesTags: ['Products'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetProductQuery, useGetProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = product;
