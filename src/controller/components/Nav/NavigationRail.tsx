import { Box } from '@mui/system';
import Link from 'next/link';
import { Avatar, Button, IconButton, LinkButton, NavigationRail as RUINavigationRail } from 'react-ui-controller';
import { useAppSelector } from '@/controller/state/app/hooks';
import { Home, LogoutOutlined, PersonOutlined, Work } from '@mui/icons-material';
import { useLogoutMutation } from '@/controller/state/app/services/auth';

export const NavigationRail = () => {
    const user = useAppSelector((state) => state.auth.name);
    const [logout] = useLogoutMutation();
    const navButtons = [
        {
            component: (
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <Box component="div" display="flex" flexDirection="column" alignItems="center">
                        <IconButton>
                            <Home />
                        </IconButton>
                        <LinkButton text="Inicio" variant="body2" />
                    </Box>
                </Link>
            ),
        },
        {
            component: (
                <Link href="/trabajos" style={{ textDecoration: 'none' }}>
                    <Box component="div" display="flex" flexDirection="column" alignItems="center">
                        <IconButton>
                            <Work />
                        </IconButton>
                        <LinkButton text="Trabajos" variant="body2" underline="none" />
                    </Box>
                </Link>
            ),
            layer: {
                components: [
                    <Link href="/trabajos/listado" passHref key="pitstop">
                        <Button variant="text" text="Listado" type="button" />
                    </Link>,
                ],
            },
        },
    ];
    const avatar = [<Avatar key="avatar" name={user} />];
    const menuItems = [
        { leadingText: 'Perfil', startIcon: <PersonOutlined />, link: '/perfil' },
        { leadingText: 'Salir', startIcon: <LogoutOutlined />, handleClick: logout },
    ];
    return <RUINavigationRail navButtons={navButtons} actions={avatar} background="#f2f2f2" menuItems={menuItems} />;
};
