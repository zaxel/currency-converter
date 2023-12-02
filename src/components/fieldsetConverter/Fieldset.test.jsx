// Fieldset.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Fieldset from './Fieldset';

describe('Fieldset component', () => {
    test('renders Fieldset component with legend and inputs', () => {
        // Arrange
        const props = {
            onInputChange: jest.fn(),
            val: 42,
            onSelectChange: jest.fn(),
            selectVal: 'Option 1',
            legend: 'Test Legend',
            options: ['Option 1', 'Option 2'],
            isDisabled: false,
        };

        // Act
        render(<Fieldset {...props} />);

        // Assert
        expect(screen.getByText('Test Legend')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('amount')).toHaveValue(42);
        expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument();
    });

    test('calls onInputChange and onSelectChange when inputs change', () => {
        // Arrange
        const onInputChange = jest.fn();
        const onSelectChange = jest.fn();
        const props = {
            onInputChange,
            val: 42,
            onSelectChange,
            selectVal: 'Option 1',
            legend: 'Test Legend',
            options: ['Option 1', 'Option 2'],
            isDisabled: false,
        };

        //Act
        render(<Fieldset {...props} />);
        fireEvent.change(screen.getByPlaceholderText('amount'), { target: { value: 50 } });
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Option 2' } });
        // Assert
        expect(onInputChange).toHaveBeenCalledWith(expect.anything());
        expect(onSelectChange).toHaveBeenCalledWith(expect.anything());
    });

    test('snapshot test', () => {
        // Arrange
        const onInputChange = jest.fn();
        const onSelectChange = jest.fn();
        const props = {
            onInputChange,
            val: 42,
            onSelectChange,
            selectVal: 'Option 1',
            legend: 'Test Legend',
            options: ['Option 1', 'Option 2'],
            isDisabled: false,
        };
        
        //Act
        const view = render(<Fieldset {...props} />);
        
        // Assert
        expect(view).toMatchSnapshot();
    })
})

// Add more tests based on your specific requirements
