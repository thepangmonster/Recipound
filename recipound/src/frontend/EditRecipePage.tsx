import React, { Component } from "react"
import { Grid } from "@material-ui/core"; 
import { IngredientListTable } from "./IngredientListTable"
import { EditRecipeAppBar } from "./EditRecipeAppBar";
import { AddIngredientForm } from "./AddIngredientForm";

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