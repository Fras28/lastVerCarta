import { Product, useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from '@/controller/state/app/services/product';
import React from 'react';
import { Button, ComplexTable, IEditableCellForm } from 'react-ui-controller';
import { AddProductModal } from '../Modal/AddProductModal';

interface IProductsTable {}

export const ProductsTable = (props: IProductsTable) => {
    // const role = useAppSelector((state) => state.auth.roles.includes('admin'));
    const [editedRow, setEditedRow] = React.useState<string | undefined>();
    const [operationDialogContent, setProductDialogContent] = React.useState<Product | { [key: string]: string } | undefined>({});
    const [openProduct, setOpenProduct] = React.useState(false);
    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();
    // const [deleteProducts] = useDeleteManyProductsMutation();
    const { data: products } = useGetProductsQuery();

    const handleOpenAddProductModal = () => {
        setOpenProduct(true);
    };
    const handleCloseAddProductModal = () => {
        setOpenProduct(false);
    };
    const handleUpdateProduct = () => {};

    const mainButton = [
        <Button handleClick={handleOpenAddProductModal} key="open-operation" variant="contained" type="button" text="Agregar Producto" />,
    ];

    const headCellsLabels = {
        name: 'Nombre',
        price: 'Price',
        section: 'Sección',
        description: 'Descripción',
        available: 'Disponible',
        image: 'Imagen',
    };
    const editableCellForms: IEditableCellForm[] = [
        {
            formInput: 'textfield',
            head: 'name',
        },
        {
            formInput: 'textfield',
            head: 'price',
        },
        {
            formInput: 'select',
            head: 'section',
            options: ['Café', 'Minutas'],
        },
        {
            formInput: 'textfield',
            head: 'description',
        },
        {
            formInput: 'switch',
            head: 'available',
        },
        {
            formInput: 'textfield',
            head: 'image',
        },
    ];
    return (
        <>
            <AddProductModal open={openProduct} handleClose={handleCloseAddProductModal} />
            <ComplexTable
                confirmEdit={(id, value) => updateProduct({ id, ...value })}
                defaultOrder="desc"
                editable
                defaultOrderBy="section"
                deleteRow={(e, value) => deleteProduct(value)}
                deleteRows={() => {}}
                dense={true}
                // editable={role}
                editableCell={editedRow && editedRow}
                editableCellForms={editableCellForms}
                excludeId
                headCellsLabelObject={headCellsLabels}
                mainButton={mainButton}
                // @ts-ignore
                rows={products ? [...products] : []}
                title="Listado de productos"
                toolbar
            />
        </>
    );
};
