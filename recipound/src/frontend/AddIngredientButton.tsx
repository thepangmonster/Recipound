import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { FormikProps } from 'formik'; 
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
