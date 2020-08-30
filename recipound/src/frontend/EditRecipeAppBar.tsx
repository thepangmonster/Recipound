import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
export function EditRecipeAppBar() {
    return (
        <div>
            <AppBar
                position="static">
                <Toolbar>
                    <Typography variant='h4'>Add a Recipe</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
