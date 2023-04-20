import { Box } from '@mui/material';
import { Modal } from 'react-ui-controller';
import { AddSectionForm } from '../Forms/AddSectionForm';

interface IProps {
    open: boolean;
    handleClose: () => void;
}

export const AddSectionModal = (props: IProps) => {
    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Box component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AddSectionForm closeModal={props.handleClose} />
            </Box>
        </Modal>
    );
};
