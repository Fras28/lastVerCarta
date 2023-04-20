import React from 'react';
import { Card } from 'react-ui-controller';

interface ITableCard {
    number: number;
}

export const TableCard = ({ number }: ITableCard) => {
    return <Card header={{ title: `Mesa nro. ${number.toString()}` }} />;
};
