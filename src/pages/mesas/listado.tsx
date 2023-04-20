import React from 'react';
import { Layout } from '@/controller/components/Layout/Layout';
import { AddTableModal } from '@/controller/components/Modal/AddTableModal';
import { useAppSelector } from '@/controller/state/app/hooks';
import { UserResponse } from '@/controller/state/app/services/auth';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { Button } from 'react-ui-controller';
import { useGetTablesQuery } from '@/controller/state/app/services/table';
import { TableCard } from '@/controller/components/Cards/TableCard';

interface IProps {
    isAuth: UserResponse;
}

const Listado = (props: IProps) => {
    const { name } = useAppSelector((state) => state.auth);
    const [openModal, setOpenModal] = React.useState(false);
    const { data: tables, isSuccess } = useGetTablesQuery();
    return (
        <div>
            <Head>
                <title>Sistema de Gestión Estándar</title>
                <meta name="description" content="Sistema de Gestión de contenido y ecommerce Mikele Arte" />
            </Head>

            <Box component="main">
                <Layout>
                    <Box>
                        <Typography variant="h3">Sistema de Gestión</Typography>
                        <Typography>Bienvenido de vuelta {name.split(' ')[0]}</Typography>
                    </Box>
                    <Button text="Agregar Mesa" variant="contained" type="button" handleClick={() => setOpenModal(true)} />
                    <AddTableModal open={openModal} handleClose={() => setOpenModal(false)} />
                    <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                        {isSuccess && tables.map((d, i) => <TableCard number={d.number} key={`table-${i}`} />)}
                    </Box>
                </Layout>
            </Box>
        </div>
    );
};

export default Listado;
