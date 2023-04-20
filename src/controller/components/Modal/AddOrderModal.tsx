import { Box } from '@mui/material';
import { Modal } from 'react-ui-controller';
import { AddOrderForm } from '../Forms/AddOrderForm';

interface IProps {
    open: boolean;
    handleClose: () => void;
}

export const AddOrderModal = (props: IProps) => {
    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Box component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AddOrderForm closeModal={props.handleClose} />
            </Box>
        </Modal>
    );
};
