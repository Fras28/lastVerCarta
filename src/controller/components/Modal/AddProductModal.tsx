import { Box } from '@mui/material';
import { Modal } from 'react-ui-controller';
import { AddProductForm } from '../Forms/AddProductForm';

interface IProps {
    open: boolean;
    handleClose: () => void;
}

export const AddProductModal = (props: IProps) => {
    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Box component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AddProductForm closeModal={props.handleClose} />
            </Box>
        </Modal>
    );
};
