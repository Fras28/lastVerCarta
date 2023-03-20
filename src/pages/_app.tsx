import { store } from '@/controller/state/app/store';
import { CssBaseline } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider clientId="872922693726-c6m43c0dv7kcr3gp4nlg90cdeo6bfbh0.apps.googleusercontent.com" >
                <CssBaseline />
                <Component {...pageProps} />
            </GoogleOAuthProvider>
        </Provider>
    );
}
