import { useLoginWithGoogleMutation } from '@/controller/state/app/services/auth';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { Button } from 'react-ui-controller';

export const GoogleLoginForm = () => {
    const [login] = useLoginWithGoogleMutation();

    return <GoogleLogin onSuccess={(res) => login({ token: res.credential })} onError={() => console.log('Ups error')} />;
};
