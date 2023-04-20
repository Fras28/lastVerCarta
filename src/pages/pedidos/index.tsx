import { Layout } from '@/controller/components/Layout/Layout';
import { useAppSelector } from '@/controller/state/app/hooks';
import { UserResponse } from '@/controller/state/app/services/auth';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';

interface IProps {
    isAuth: UserResponse;
}

const Pedidos = (props: IProps) => {
    const { name } = useAppSelector((state) => state.auth);
    return (
        <div>
            <Head>
                <title>Sistema de Gestión Estándar</title>
                <meta name="description" content="Sistema de Gestión de contenido y ecommerce Mikele Arte" />
            </Head>

            <Box component="main">
                <Layout>
                    <Typography variant="h3">Sistema de Gestión</Typography>
                    <Typography>Bienvenido de vuelta {name.split(' ')[0]}</Typography>
                </Layout>
            </Box>
        </div>
    );
};

export default Pedidos;
