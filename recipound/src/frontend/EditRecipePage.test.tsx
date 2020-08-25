import React from 'react'
import { render } from '@testing-library/react'
import { EditRecipePage } from './EditRecipePage'

interface ingredient {
    RawIngredient: string
    Quantity: number
    QuantityUnit: string
    PackageAmount: number
    PackageAmountUnit: string
}

test('renders the edit receipe page', async () => {
    const {getByText} = render(<EditRecipePage/>)
    expect(getByText('Add an ingredient')).toBeDefined
    expect(getByText('Add to Recipe')).toBeDefined

    //test for the save as draft button
    //test for add to recipe button
    //test for the continue to recipe details button
    //test for success toast
    //test for failure toast
    //test for navigate back 
    //test for maths

})
