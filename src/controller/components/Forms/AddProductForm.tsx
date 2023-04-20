import { Product } from '@/controller/state/app/services/product';
import { FormControl, FormLabel, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { Button, Select, BasicForm, Switch, TextField, CurrencyTextField } from 'react-ui-controller';
import { useAddProductMutation } from '@/controller/state/app/services/product';
import { useGetSectionsQuery } from '@/controller/state/app/services/section';

interface IProps {
    closeModal: () => void;
}

export const AddProductForm = (props: IProps) => {
    const [formState, setFormState] = React.useState<Product>({ name: '', section: '', available: false });
    const [addProduct] = useAddProductMutation();
    const { data: sections } = useGetSectionsQuery();

    const handleChange = (name: string | undefined, value: string | boolean | number | undefined) => {
        if (name) {
            setFormState((prevState) => ({ ...prevState, [name]: value }));
        }
    };
    const handleSubmit = () => {
        addProduct(formState);
        props.closeModal();
    };

    return (
        <BasicForm direction="column" background="#fff" handleSubmit={handleSubmit} alignItems="center" gap={4}>
            <FormControl component="fieldset" variant="standard" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormLabel component="legend" sx={{ marginBottom: '16px' }}>
                    Agregar un Producto
                </FormLabel>
                <TextField
                    name="name"
                    label="Nombre del producto"
                    handleChange={handleChange}
                    type="text"
                    value={formState.name}
                    variant="outlined"
                />
                <CurrencyTextField
                    name="price"
                    label="Precio"
                    handleChange={handleChange}
                    value={formState.price}
                    variant="outlined"
                    prefix="$"
                    allowNegativeValues={false}
                />
                <Select
                    name="section"
                    value={sections ? sections?.find((d) => d.id === formState.section)?.name! : ''}
                    handleObjectClick={handleChange}
                    items={sections ? sections?.map((d) => ({ id: d.id, text: d.name })) : []}
                    label="Sección"
                />
                <TextField
                    name="description"
                    label="Descripción"
                    value={formState.description}
                    handleChange={handleChange}
                    type="text"
                    variant="outlined"
                />
                <Switch name="available" label="Disponible" handleChange={handleChange} checked={formState.available} />
            </FormControl>
            <Button variant="contained" type="submit" color="primary" text="Agregar moneda" />
        </BasicForm>
    );
};
