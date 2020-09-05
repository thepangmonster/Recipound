import React, { Component } from "react";
import { Formik, Form, Field } from "formik"; 
import { TextField } from "formik-material-ui";
import { Button, Paper } from '@material-ui/core'

export class AddIngredientForm extends Component {

    handleSubmit = (values: any, {
        setSubmitting,
    }: any) => {
        setSubmitting(false)
        console.log(values)
        return
        
    }

    initialValues = {
        rawIngredient: '',
        quantity: '',
        unit: '',
        packageAmount: '',
        packageUnit: '',
        packageCost: '', 
        source: '',
    }

    render () {
        return (
            <Formik
            initialValues = {this.initialValues}
            onSubmit = {this.handleSubmit}>
            {formProps => { 
                return(
                    <Paper>
                        <Form>
                            <Field type="text" name="rawIngredient" placeholder="Raw Ingredient" component={TextField}/>
                            <Field type="number" name="quantity" placeholder="Quantity" component={TextField}/>
                            <Field type="text" name="unit" placeholder="Unit" component={TextField}/>
                            <Field type="number" name="packageAmount" placeholder="Package Amount" component={TextField}/>
                            <Field type="text" name="packageUnit" placeholder="Package Unit" component={TextField}/>
                            <Field type="number" name="packageCost" placeholder="Package Cost" component={TextField}/>
                            <Field type="text" name="source" placeholder="Source" component={TextField}/>
                            <Button type="submit"
                                    disabled={formProps.isSubmitting}
                                    variant="contained">
                                    Add to Recipe
                            </Button>
                        </Form>
                    </Paper>
                ); 
            }}
            </Formik>
        );
    }
}
