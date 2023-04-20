import { api } from './api';
import { Method } from './methods';

export type Section = {
    id?: string;
    name: string;
    available: boolean;
};

const section = api.injectEndpoints({
    endpoints: (builder) => ({
        getSections: builder.query<Section[], void>({
            query: () => ({
                url: 'section',
                method: Method.GET,
            }),
            providesTags: ['Sections'],
        }),
        getSection: builder.query<Section, void>({
            query: (id) => ({
                url: `section/id`,
                method: Method.GET,
            }),
            providesTags: ['Sections'],
        }),
        addSection: builder.mutation<Section, Partial<Section>>({
            query: (body) => ({
                url: 'section',
                method: Method.POST,
                body,
            }),
            invalidatesTags: ['Sections'],
        }),
        updateSection: builder.mutation<Section, Partial<Section> & Pick<Section, 'id'>>({
            query: ({ id, ...body }) => ({
                url: `section/${id}`,
                method: Method.PATCH,
                body,
            }),
            invalidatesTags: ['Sections'],
        }),
        deleteSection: builder.mutation({
            query: (id) => ({
                url: `section/${id}`,
                method: Method.DELETE,
            }),
            invalidatesTags: ['Sections'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetSectionQuery, useGetSectionsQuery, useAddSectionMutation, useUpdateSectionMutation, useDeleteSectionMutation } = section;
