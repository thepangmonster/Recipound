import React, { Component } from "react"
import { AppBar, Typography, Button, Paper, Grid, TextField, Toolbar } from "@material-ui/core"; 
import { IngredientListTable } from "./IngredientListTable"

function EditRecipeAppBar() {
    return (
        <div>
            <AppBar 
            position="static">
                <Toolbar>
                    <Typography variant='h4'>Add a Recipe</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

function AddIngredientButton() {
    return (
        <div>
            <Button variant='contained'>
                Add to Recipe
            </Button>
        </div>
    )
}

function AddIngredientForm() {
    return (
        <div>
            <Paper elevation={3}>
                <Typography variant='h6'>Add an ingredient</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            fullWidth
                            label='Raw ingredient'
                        />  
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            variant='outlined'
                            label='Quantity'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            variant='outlined'
                            label='Unit'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            variant='outlined'
                            label='Package Amount'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            variant='outlined'
                            label='Unit'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant='outlined'
                            fullWidth
                            label='Package Cost'
                        />  
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant='outlined'
                            fullWidth
                            label='Source'
                        />  
                    </Grid>
                    <Grid item xs={12}>
                        <AddIngredientButton/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export class EditRecipePage extends Component {
    render() {
        return (
            <div>
                <EditRecipeAppBar/>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <AddIngredientForm/>
                    </Grid>
                    <Grid item xs={6}>
                        <IngredientListTable/>
                    </Grid>
                </Grid>
            </div>

        )
    }
}