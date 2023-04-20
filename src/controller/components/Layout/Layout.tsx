import { useAppDispatch, useAppSelector } from '@/controller/state/app/hooks';
import { UserResponse, useVerifyCookieQuery } from '@/controller/state/app/services/auth';
import { setCredentials } from '@/controller/state/features/auth';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React from 'react';
import { LoginForm } from '../Forms/LoginForm';
import { NavigationRail } from '../Nav/NavigationRail';

interface IProps {
    children: React.ReactNode | React.ReactNode[];
    isAuth?: UserResponse;
}

export const Layout = ({ children, isAuth }: IProps) => {
    const { isLoggedIn } = useAppSelector((state) => state.auth);
    const route = useRouter();
    const dispatch = useAppDispatch();
    const { data: isAuthenticated, isLoading, isError } = useVerifyCookieQuery();
    React.useEffect(() => {
        if (isAuth) {
            dispatch(setCredentials(isAuth));
        }
        if (isAuthenticated) {
            dispatch(setCredentials(isAuthenticated));
        }
        if (isError) {
            route.push('/');
        }
    }, [dispatch, isAuth, isAuthenticated, isError]);
    return (
        <>
            {!isLoggedIn && !isLoading && (
                <Box display="flex" justifyContent="center" height="100%" flexDirection="column" alignItems="center">
                    <LoginForm />
                </Box>
            )}
            {isLoading && (
                <Box display="flex" justifyContent="center" height="100%">
                    <CircularProgress />
                </Box>
            )}
            {isLoggedIn && (
                <>
                    <NavigationRail />
                    <Box component="main" display="flex" ml="100px" height="100%" justifyContent="center" flexDirection="column" alignItems="center" gap="40px">
                        {children}
                    </Box>
                </>
            )}
        </>
    );
};
