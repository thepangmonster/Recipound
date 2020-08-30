import React, { Component } from "react";
import { Typography, Paper, Grid, TextField } from "@material-ui/core";
import { AddIngredientButton } from "./AddIngredientButton";

export class AddIngredientForm extends Component {
    render () {
        return (
            <div>
                <Paper elevation={3}>
                    <Typography variant='h6'>Add an ingredient</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                fullWidth
                                label='Raw ingredient' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant='outlined'
                                label='Quantity' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant='outlined'
                                label='Unit' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant='outlined'
                                label='Package Amount' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant='outlined'
                                label='Unit' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                fullWidth
                                label='Package Cost' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                fullWidth
                                label='Source' />
                        </Grid>
                        <Grid item xs={12}>
                            <AddIngredientButton />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}
