import { api } from './api';
import { Method } from './methods';

export type Table = {
    id?: string;
    number: number;
};

const table = api.injectEndpoints({
    endpoints: (builder) => ({
        getTables: builder.query<Table[], void>({
            query: () => ({
                url: 'table',
                method: Method.GET,
            }),
            providesTags: ['Tables'],
        }),
        getTable: builder.query<Table, void>({
            query: (id) => ({
                url: `table/id`,
                method: Method.GET,
            }),
            providesTags: ['Tables'],
        }),
        addTable: builder.mutation<Table, Partial<Table>>({
            query: (body) => ({
                url: 'table',
                method: Method.POST,
                body,
            }),
            invalidatesTags: ['Tables'],
        }),
        updateTable: builder.mutation<Table, Partial<Table> & Pick<Table, 'id'>>({
            query: ({ id, ...body }) => ({
                url: `table/id`,
                method: Method.PATCH,
                body,
            }),
            invalidatesTags: ['Tables'],
        }),
        deleteTable: builder.mutation({
            query: (id) => ({
                url: `table/id`,
                method: Method.DELETE,
            }),
            invalidatesTags: ['Tables'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetTableQuery, useGetTablesQuery, useAddTableMutation, useUpdateTableMutation, useDeleteTableMutation } = table;
