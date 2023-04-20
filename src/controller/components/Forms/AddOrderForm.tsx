import { Order } from '@/controller/state/app/services/order';
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, FormLabel, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';
import { Button, Select, BasicForm, Switch, TextField, CounterButton } from 'react-ui-controller';
import { useAddOrderMutation } from '@/controller/state/app/services/order';
import { useGetTablesQuery } from '@/controller/state/app/services/table';
import { useGetProductsQuery } from '@/controller/state/app/services/product';
import { useGetSectionsQuery } from '@/controller/state/app/services/section';

interface IProps {
    closeModal: () => void;
}

export const AddOrderForm = (props: IProps) => {
    const [formState, setFormState] = React.useState<Order>({ table: '', items: '', total: '' });
    const [addOrder] = useAddOrderMutation();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const { data: tables } = useGetTablesQuery();
    const { data: products } = useGetProductsQuery();
    const { data: sections } = useGetSectionsQuery();

    const handleChange = (name: string | undefined, value: string | boolean | undefined) => {
        if (name) {
            return setFormState((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleSubmit = () => {
        addOrder(formState);
        props.closeModal();
    };

    return (
        <BasicForm direction="column" background="#fff" handleSubmit={handleSubmit} alignItems="center" gap={4} maxWidth="60vw">
            <FormControl component="fieldset" variant="standard" sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <FormLabel component="legend" sx={{ marginBottom: '16px' }}>
                    Agregar un Pedido
                </FormLabel>
                <Select
                    name="table"
                    label="Mesa"
                    handleChange={handleChange}
                    value={formState.table}
                    variant="outlined"
                    items={tables?.map((d) => d.number.toString())}
                />
                {/* Listado de products, por secciones y una tarjeta con una imagen de cada producto con su detalle */}
                <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
                    {sections &&
                        sections.map((d, i) => (
                            <Accordion
                                key={`section-${i}`}
                                expanded={expanded === d.name}
                                onChange={handleAccordionChange(d.name)}
                                sx={{ alignSelf: 'baseline' }}
                            >
                                <AccordionSummary expandIcon={'More'} aria-controls="panel1bh-content" id="panel1bh-header">
                                    <Typography variant="h6"> {d.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {products &&
                                        products.map((e, j) => {
                                            console.log(e, d);
                                            if (e.section === d.name) {
                                                return (
                                                    <Box
                                                        key={`product-${j}`}
                                                        display="flex"
                                                        justifyContent="space-between"
                                                        alignItems="center"
                                                        gap={2}
                                                    >
                                                        <Typography>{e.name}</Typography>
                                                        <CounterButton name={d.id} />
                                                    </Box>
                                                );
                                            }
                                        })}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                </Box>
                <Typography>Total: </Typography>
            </FormControl>
            <Button variant="contained" type="submit" color="primary" text="Agregar moneda" />
        </BasicForm>
    );
};
