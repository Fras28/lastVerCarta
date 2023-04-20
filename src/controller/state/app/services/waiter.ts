import { api } from './api';
import { Method } from './methods';

export type Waiter = {
    id?: string;
};

const waiter = api.injectEndpoints({
    endpoints: (builder) => ({
        getWaiters: builder.query<Waiter[], void>({
            query: () => ({
                url: 'waiter',
                method: Method.GET,
            }),
            providesTags: ['Waiters'],
        }),
        getWaiter: builder.query<Waiter, void>({
            query: (id) => ({
                url: `waiter/id`,
                method: Method.GET,
            }),
            providesTags: ['Waiters'],
        }),
        addWaiter: builder.mutation<Waiter, Partial<Waiter>>({
            query: (body) => ({
                url: 'waiter',
                method: Method.POST,
                body,
            }),
            invalidatesTags: ['Waiters'],
        }),
        updateWaiter: builder.mutation<Waiter, Partial<Waiter> & Pick<Waiter, 'id'>>({
            query: ({ id, ...body }) => ({
                url: `waiter/id`,
                method: Method.PATCH,
                body,
            }),
            invalidatesTags: ['Waiters'],
        }),
        deleteWaiter: builder.mutation({
            query: (id) => ({
                url: `waiter/id`,
                method: Method.DELETE,
            }),
            invalidatesTags: ['Waiters'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetWaiterQuery, useGetWaitersQuery, useAddWaiterMutation, useUpdateWaiterMutation, useDeleteWaiterMutation } = waiter;
