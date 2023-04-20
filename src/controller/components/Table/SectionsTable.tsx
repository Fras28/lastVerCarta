import { Section, useDeleteSectionMutation, useGetSectionsQuery, useUpdateSectionMutation } from '@/controller/state/app/services/section';
import React from 'react';
import { Button, ComplexTable, IEditableCellForm } from 'react-ui-controller';
import { AddProductModal } from '../Modal/AddProductModal';
import { AddSectionModal } from '../Modal/AddSectionModal';

interface ISectionsTable {}

export const SectionsTable = (props: ISectionsTable) => {
    const [editedRow, setEditedRow] = React.useState<string | undefined>();
    const [openSection, setOpenSection] = React.useState(false);
    const [updateSection] = useUpdateSectionMutation();
    const [deleteSection] = useDeleteSectionMutation();
    // const [deleteSections] = useDeleteManySectionsMutation();
    const { data: sections } = useGetSectionsQuery();

    const handleOpenAddSectionModal = () => {
        setOpenSection(true);
    };
    const handleCloseAddSectionModal = () => {
        setOpenSection(false);
    };
    const handleUpdateSection = () => {};

    const mainButton = [
        <Button handleClick={handleOpenAddSectionModal} key="open-operation" variant="contained" type="button" text="Agregar Sección" />,
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
            <AddSectionModal open={openSection} handleClose={handleCloseAddSectionModal} />
            <ComplexTable
                confirmEdit={(id, value) => updateSection({ id, ...value })}
                defaultOrder="asc"
                editable
                defaultOrderBy="name"
                deleteRow={(e, value) => deleteSection(value)}
                deleteRows={() => {}}
                dense={true}
                // editable={role}
                editableCell={editedRow && editedRow}
                editableCellForms={editableCellForms}
                excludeId
                headCellsLabelObject={headCellsLabels}
                mainButton={mainButton}
                // @ts-ignore
                rows={sections ? [...sections] : []}
                title="Listado de secciones"
                toolbar
            />
        </>
    );
};
