import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse } from '../app/services/auth';
import { RootState } from '../app/store';

interface AuthState extends UserResponse {
    isLoggedIn: boolean;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: { name: '', username: '', roles: [], isLoggedIn: false } as AuthState,
    reducers: {
        setCredentials: (state, { payload: { name, username, roles } }: PayloadAction<UserResponse>) => {
            state.name = name;
            state.username = username;
            state.roles = roles;
            state.isLoggedIn = true;
        },
        logoutState: (state) => {
            state.isLoggedIn = false;
            state.roles = [];
            state.username = '';
            state.name = '';
        },
    },
});

export const { setCredentials, logoutState } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.name;
