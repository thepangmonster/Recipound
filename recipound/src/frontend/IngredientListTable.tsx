import React, { Component } from "react";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

interface Column {
    id: 'ingredient' | 'quantity' | 'packageAmount' | 'packageCost' | 'source'; 
    label: string; 
    minWidth?:number;  
    align?: 'right';
    format?: (value: number) => string; 
}

const columns: Column[] = [
    {
    id: 'ingredient',
    label:
    'Ingredient',
    minWidth: 100,
    }, 
    {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 100,
    format: (value: number) => value.toLocaleString('en-US'),
    },
    {
    id: 'packageAmount',
    label: 'Package Amount',
    minWidth: 100,
    format: (value: number) => value.toLocaleString('en-US'),
    }, 
    {
    id: 'packageCost',
    label: 'Package Cost',
    minWidth: 100,
    format: (value: number) => value.toFixed(2),
    },    
    {
    id: 'source',
    label: 'Source',
    minWidth: 100,
    format: (value: number) => value.toLocaleString('en-US'),
    }, 
];

interface Data {
    ingredient: string
    quantity: number
    packageAmount: number
    packageCost: number
    source: string
}

export class IngredientListTable extends Component {
    render() {
        return (
            <div>
                <Paper>
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                {columns.map((column) => {
                                    return (
                                    <TableCell key={column.id} align={column.align}>
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        )
    }
}