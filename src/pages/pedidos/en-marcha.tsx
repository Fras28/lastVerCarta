import React from 'react';
import { Layout } from '@/controller/components/Layout/Layout';
import { useAppSelector } from '@/controller/state/app/hooks';
import { UserResponse } from '@/controller/state/app/services/auth';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { Button } from 'react-ui-controller';
import { AddOrderModal } from '@/controller/components/Modal/AddOrderModal';

interface IProps {
    isAuth: UserResponse;
}

const EnMarcha = (props: IProps) => {
    const [openModal, setOpenModal] = React.useState(false);
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
                    <AddOrderModal open={openModal} handleClose={() => setOpenModal(false)} />
                    <Button text="Agregar pedido" variant="contained" handleClick={() => setOpenModal(true)} type="button" />
                </Layout>
            </Box>
        </div>
    );
};

export default EnMarcha;
