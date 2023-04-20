import { Section, useAddSectionMutation } from '@/controller/state/app/services/section';
import { FormControl, FormLabel } from '@mui/material';
import React from 'react';
import { BasicForm, Button, Switch, TextField } from 'react-ui-controller';

interface IProps {
    closeModal: () => void;
}

export const AddSectionForm = (props: IProps) => {
    const [formState, setFormState] = React.useState<Section>({ name: '', available: false });
    const [addSection] = useAddSectionMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;
        if (type === 'checkbox') {
            return setFormState((prevState) => ({ ...prevState, [name]: checked }));
        }
        return setFormState((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = () => {
        addSection(formState);
        props.closeModal();
    };

    return (
        <BasicForm direction="column" background="#fff" handleSubmit={handleSubmit} alignItems="center" gap={4}>
            <FormControl component="fieldset" variant="standard" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormLabel component="legend" sx={{ marginBottom: '16px' }}>
                    Agregar una Sección
                </FormLabel>
                <TextField name="name" label="Nombre" handleChange={handleChange} type="text" value={formState.name} variant="outlined" />
                <Switch name="available" label="Disponible" handleChange={handleChange} checked={formState.available} />
            </FormControl>
            <Button variant="contained" type="submit" color="primary" text="Agregar moneda" />
        </BasicForm>
    );
};
