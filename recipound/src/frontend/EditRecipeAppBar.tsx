import React, { Component } from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

export class EditRecipeAppBar extends Component {
    render () {
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
}
