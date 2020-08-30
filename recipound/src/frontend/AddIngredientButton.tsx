import React, { Component } from "react";
import { Button } from "@material-ui/core";
export class AddIngredientButton extends Component {
    render() {
        return (
            <div>
                <Button variant='contained'>
                    Add to Recipe
                </Button>
            </div>
        );
    }
}
