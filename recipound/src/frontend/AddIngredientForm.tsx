import React, { Component } from "react";
import { Formik, Form, Field } from "formik"; 
import { TextField } from "formik-material-ui";
import { Button, Paper, Typography } from '@material-ui/core'; 
import * as Yup from 'yup'; 

const AddIngredientSchema = Yup.object().shape({
    rawIngredient: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
    quantity: Yup.number()
    .positive('Must be a positive numebr')
    .min(.001, 'Must be larger')
    .max(999999.999, 'Must be smaller')
    .required('Required'),
    unit: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
    packageAmount: Yup.number()
    .positive('Must be a positive numebr')
    .min(.001, 'Must be larger')
    .max(999999.999, 'Must be smaller')
    .required('Required'),
    packageUnit: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
    packageCost: Yup.number()
    .positive('Must be a positive numebr')
    .min(.001, 'Must be larger')
    .max(999999.999, 'Must be smaller')
    .required('Required'),
    source: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
})

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
            onSubmit = {this.handleSubmit}
            validationSchema = {AddIngredientSchema}>
            {(formProps) => {
                    return (
                        <Paper>
                            <Form>
                                <Field type="text" name="rawIngredient" placeholder="Raw Ingredient" component={TextField} />
                                <Field type="number" name="quantity" placeholder="Quantity" component={TextField} />
                                <Field type="text" name="unit" placeholder="Unit" component={TextField} />
                                <Field type="number" name="packageAmount" placeholder="Package Amount" component={TextField} />
                                <Field type="text" name="packageUnit" placeholder="Package Unit" component={TextField} />
                                <Field type="number" name="packageCost" placeholder="Package Cost" component={TextField} />
                                <Field type="text" name="source" placeholder="Source" component={TextField} />
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
