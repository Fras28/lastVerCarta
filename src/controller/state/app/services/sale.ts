import { api } from './api';
import { Method } from './methods';

export type Sale = {
    id?: string;
};

const sale = api.injectEndpoints({
    endpoints: (builder) => ({
        getSales: builder.query<Sale[], void>({
            query: () => ({
                url: 'sale',
                method: Method.GET,
            }),
            providesTags: ['Sales'],
        }),
        getSale: builder.query<Sale, void>({
            query: (id) => ({
                url: `sale/id`,
                method: Method.GET,
            }),
            providesTags: ['Sales'],
        }),
        addSale: builder.mutation<Sale, Partial<Sale>>({
            query: (body) => ({
                url: 'sale',
                method: Method.POST,
                body,
            }),
            invalidatesTags: ['Sales'],
        }),
        updateSale: builder.mutation<Sale, Partial<Sale> & Pick<Sale, 'id'>>({
            query: ({ id, ...body }) => ({
                url: `sale/id`,
                method: Method.PATCH,
                body,
            }),
            invalidatesTags: ['Sales'],
        }),
        deleteSale: builder.mutation({
            query: (id) => ({
                url: `sale/id`,
                method: Method.DELETE,
            }),
            invalidatesTags: ['Sales'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetSaleQuery, useGetSalesQuery, useAddSaleMutation, useUpdateSaleMutation, useDeleteSaleMutation } = sale;
