import { Box } from '@mui/material';
import { Modal } from 'react-ui-controller';
import { AddProductForm } from '../Forms/AddProductForm';
import { AddTableForm } from '../Forms/AddTableForm';

interface IProps {
    open: boolean;
    handleClose: () => void;
}

export const AddTableModal = (props: IProps) => {
    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Box component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AddTableForm closeModal={props.handleClose} />
            </Box>
        </Modal>
    );
};
