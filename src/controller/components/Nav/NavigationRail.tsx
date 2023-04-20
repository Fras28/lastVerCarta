import { Box } from '@mui/system';
import Link from 'next/link';
import { Avatar, Button, IconButton, LinkButton, NavigationRail as RUINavigationRail } from 'react-ui-controller';
import { useAppSelector } from '@/controller/state/app/hooks';
import {
    HomeOutlined,
    LogoutOutlined,
    MonetizationOnOutlined,
    PeopleAlt,
    PersonOutlined,
    PostAddOutlined,
    ShoppingCartOutlined,
    TableBarOutlined,
    Work,
} from '@mui/icons-material';
import { useLogoutMutation } from '@/controller/state/app/services/auth';
import Waiter from 'public/assets/images/icons/waiter';

export const NavigationRail = () => {
    const user = useAppSelector((state) => state.auth.name);
    const [logout] = useLogoutMutation();
    const navButtons = [
        {
            component: (
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <Box component="div" display="flex" flexDirection="column" alignItems="center">
                        <IconButton>
                            <HomeOutlined color="primary" />
                        </IconButton>
                        <LinkButton text="Inicio" variant="body2" />
                    </Box>
                </Link>
            ),
        },
        {
            component: (
                <Link href="/productos" style={{ textDecoration: 'none' }}>
                    <Box component="div" display="flex" flexDirection="column" alignItems="center">
                        <IconButton>
                            <ShoppingCartOutlined color="primary" />
                        </IconButton>
                        <LinkButton text="Productos" variant="body2" underline="none" />
                    </Box>
                </Link>
            ),
            layer: {
                components: [
                    <Link href="/productos/listado" passHref key="pitstop">
                        <Button variant="text" text="Listado" type="button" />
                    </Link>,
                    <Link href="/productos/secciones" passHref key="pitstop">
                        <Button variant="text" text="Secciones" type="button" />
                    </Link>,
                ],
            },
        },
        {
            component: (
                <Link href="/pedidos" style={{ textDecoration: 'none' }}>
                    <Box component="div" display="flex" flexDirection="column" alignItems="center">
                        <IconButton>
                            <PostAddOutlined color="primary" />
                        </IconButton>
                        <LinkButton text="Pedidos" variant="body2" underline="none" />
                    </Box>
                </Link>
            ),
            layer: {
                components: [
                    <Link href="/pedidos/en-marcha" passHref key="en-marcha">
                        <Button variant="text" text="En Marcha" type="button" />
                    </Link>,
                ],
            },
        },
        {
            component: (
                <Link href="/ventas" style={{ textDecoration: 'none' }}>
                    <Box component="div" display="flex" flexDirection="column" alignItems="center">
                        <IconButton>
                            <MonetizationOnOutlined color="primary" />
                        </IconButton>
                        <LinkButton text="Ventas" variant="body2" underline="none" />
                    </Box>
                </Link>
            ),
            layer: {
                components: [
                    <Link href="/ventas/" passHref key="en-marcha">
                        <Button variant="text" text="Listado" type="button" />
                    </Link>,
                ],
            },
        },
        {
            component: (
                <Link href="/mozos" style={{ textDecoration: 'none' }}>
                    <Box component="div" display="flex" flexDirection="column" alignItems="center">
                        <IconButton>
                            <Waiter />
                        </IconButton>
                        <LinkButton text="Mozos" variant="body2" underline="none" />
                    </Box>
                </Link>
            ),
            layer: {
                components: [
                    <Link href="/productos/en-marcha" passHref key="en-marcha">
                        <Button variant="text" text="En Marcha" type="button" />
                    </Link>,
                ],
            },
        },
        {
            component: (
                <Link href="/mesas" style={{ textDecoration: 'none' }}>
                    <Box component="div" display="flex" flexDirection="column" alignItems="center">
                        <IconButton>
                            <TableBarOutlined color="primary" />
                        </IconButton>
                        <LinkButton text="Mesas" variant="body2" underline="none" />
                    </Box>
                </Link>
            ),
            layer: {
                components: [
                    <Link href="/mesas/listado" passHref key="listado">
                        <Button variant="text" text="Listado" type="button" />
                    </Link>,
                ],
            },
        },
    ];
    const avatar = [<Avatar key="avatar" name={user} />];
    const menuItems = [
        { leadingText: 'Perfil', startIcon: <PersonOutlined />, link: '/perfil' },
        { leadingText: 'Usuarios', startIcon: <PeopleAlt />, link: '/usuarios' },
        { leadingText: 'Salir', startIcon: <LogoutOutlined />, handleClick: logout },
    ];
    return <RUINavigationRail navButtons={navButtons} actions={avatar} background="#f2f2f2" menuItems={menuItems} />;
};
