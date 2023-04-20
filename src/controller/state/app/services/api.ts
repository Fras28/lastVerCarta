import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from '../store';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BACKEND,
        credentials: 'include',
        mode: 'cors',
    }),
    tagTypes: ['Orders', 'Products', 'Sales', 'Waiters', 'Tables', 'Sections'],
    endpoints: () => ({}),
});
