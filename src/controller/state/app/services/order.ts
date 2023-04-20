import { api } from './api';
import { Method } from './methods';

export type Order = {
    id?: string;
    table: string;
    items: string[];
    total: number;
};

const order = api.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<Order[], void>({
            query: () => ({
                url: 'order',
                method: Method.GET,
            }),
            providesTags: ['Orders'],
        }),
        getOrder: builder.query<Order, void>({
            query: (id) => ({
                url: `order/id`,
                method: Method.GET,
            }),
            providesTags: ['Orders'],
        }),
        addOrder: builder.mutation<Order, Partial<Order>>({
            query: (body) => ({
                url: 'order',
                method: Method.POST,
                body,
            }),
            invalidatesTags: ['Orders'],
        }),
        updateOrder: builder.mutation<Order, Partial<Order> & Pick<Order, 'id'>>({
            query: ({ id, ...body }) => ({
                url: `order/id`,
                method: Method.PATCH,
                body,
            }),
            invalidatesTags: ['Orders'],
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `order/id`,
                method: Method.DELETE,
            }),
            invalidatesTags: ['Orders'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetOrderQuery, useGetOrdersQuery, useAddOrderMutation, useUpdateOrderMutation, useDeleteOrderMutation } = order;
