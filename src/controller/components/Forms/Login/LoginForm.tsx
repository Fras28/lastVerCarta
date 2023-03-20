import { Box } from '@mui/system';
import React, { FormEvent } from 'react';
import { BasicForm, Button, TextField } from 'react-ui-controller';
import { useAppDispatch } from '@/controller/state/app/hooks';
import { useLoginMutation } from '@/controller/state/app/services/auth';
import { setCredentials } from '@/controller/state/features/auth';

export const LoginForm = () => {
    const [loginState, setLoginState] = React.useState({ username: '', password: '' });
    const [login, { isSuccess, isLoading, isError }] = useLoginMutation();
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const { username, password } = loginState;
        const user = await login({ username, password }).unwrap();
        dispatch(setCredentials(user));
    };

    return (
        <BasicForm direction="column" handleSubmit={handleSubmit} alignItems="center" gap={4}>
            <Box display="flex" flexDirection="column" gap={2}>
                <TextField label="Usuario" name="username" type="text" value={loginState.username} variant="outlined" handleChange={handleChange} />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={loginState.password}
                    variant="outlined"
                    handleChange={handleChange}
                />
            </Box>
            <Button text="Iniciar sesión" type="submit" variant="contained" loginButton={{ loading: isLoading, success: isSuccess }} />
        </BasicForm>
    );
};
