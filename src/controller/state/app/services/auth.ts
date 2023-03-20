import { api } from './api';
import { Methods } from './methods';

export interface UserResponse {
    name: string;
    username: string;
    roles: string[];
}

export interface LoginRequest {
    username: string;
    password: string;
}

const auth = api.injectEndpoints({
    endpoints: (builder) => ({
        verifyCookie: builder.query<UserResponse, void>({
            query: () => ({
                url: 'auth',
                method: 'GET',
            }),
        }),
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        loginWithGoogle: builder.mutation({
            query: (credentials) => ({
                url: 'google-auth',
                method: Methods.POST,
                body: credentials,
            }),
        }),
        logout: builder.mutation<UserResponse, void>({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useLoginMutation, useLoginWithGoogleMutation, useLogoutMutation, useVerifyCookieQuery } = auth;
