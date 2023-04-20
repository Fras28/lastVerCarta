import { Product } from '@/controller/state/app/services/product';
import { FormControl, FormLabel, SelectChangeEvent } from '@mui/material';
import React, { FormEvent } from 'react';
import { Button, Select, BasicForm, Switch, TextField } from 'react-ui-controller';
import { useAddProductMutation } from '@/controller/state/app/services/product';
import { Table, useAddTableMutation } from '@/controller/state/app/services/table';

interface IProps {
    closeModal: () => void;
}

export const AddTableForm = (props: IProps) => {
    const ref = React.useRef<HTMLInputElement>(null);
    const [formState, setFormState] = React.useState<Table>({ number: 0 });
    const [addTable] = useAddTableMutation();

    const handleChange = (name: string | undefined, value: string | undefined) => {
        if (name) {
            return setFormState((prevState) => ({ ...prevState, [name]: Number(value) }));
        }
    };
    const handleSubmit = (e: FormEvent | React.KeyboardEvent<HTMLFormElement>) => {
        addTable(formState);
        props.closeModal();
    };
    React.useEffect(() => {
        ref.current!.focus();
    }, []);

    return (
        <BasicForm direction="column" background="#fff" handleSubmit={handleSubmit} alignItems="center" gap={2}>
            <FormControl component="fieldset" variant="standard" sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <FormLabel component="legend" sx={{ marginBottom: '16px' }}>
                    Agregar una Mesa
                </FormLabel>
                <TextField
                    inputRef={ref}
                    name="number"
                    label="Número"
                    handleChange={handleChange}
                    value={formState.number}
                    variant="outlined"
                    align="center"
                    width="12ch"
                    autoFocus
                    type="text"
                />
            </FormControl>
            <Button variant="contained" type="submit" color="primary" text="Agregar Mesa" />
        </BasicForm>
    );
};
