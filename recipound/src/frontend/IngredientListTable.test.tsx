import React from 'react'
import { render } from '@testing-library/react'
import { IngredientListTable } from './IngredientListTable'

test('renders the ingredient list table', async () => {
    const {getByText} = render(<IngredientListTable/>)
    expect(getByText('Ingredient')).toBeDefined
})