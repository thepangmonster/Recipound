import React, { Component } from "react";
import { Formik, Form, Field } from "formik"; 
import { TextField } from "formik-material-ui";
import { Button } from '@material-ui/core'

export class AddIngredientForm extends Component {

    handleSubmit = (values: any, {
        setSubmitting
    }: any) => {
        setSubmitting(false)
        return
    }

    render () {
        return (
            <Formik
            initialValues = {{
                rawIngredient: '',
                quantity: '',
                unit: '',
                packageAmount: '',
                packageUnit: '',
                packageCost: '', 
                source: '',
            }}
            onSubmit = {this.handleSubmit}
            render = { formProps => { 
                return(
                    <Form>
                        <Field type="text" name="rawIngredient" placeholder="Raw Ingredient" component={ TextField }/>
                        <Field type="number" name="quantity" placeholder="Quantity" component={ TextField }/>
                        <Field type="text" name="unit" placeholder="Unit" component={ TextField }/>
                        <Field type="number" name="packageAmount" placeholder="Package Amount" component={ TextField }/>
                        <Field type="text" name="packageUnit" placeholder="Package Unit" component={ TextField }/>
                        <Field type="number" name="packageCost" placeholder="Package Cost" component={ TextField }/>
                        <Field type="text" name="source" placeholder="Source" component={ TextField }/>
                        <Button type="submit"
                                disabled={formProps.isSubmitting}>
                                Add to Recipe
                        </Button>
                    </Form>
                ); 
            }}
        />);
    }
}
