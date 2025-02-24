import React from 'react'; // Importing React for component creation
import { render, screen, fireEvent } from '@testing-library/react'; // Importing testing library utilities for rendering and interacting with components
import Dropdown from './Dropdown'; // Importing the Dropdown component for testing

describe('Dropdown Component', () => {
  const mockOnChange = jest.fn(); // Mocking the onChange handler to track function calls during tests

  // Test for rendering the Dropdown with options
  test('renders Dropdown with options', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} onChange={mockOnChange} />); // Rendering Dropdown with options and mocked onChange

    // Assertions to ensure Dropdown renders properly
    expect(screen.getByRole('combobox')).toBeInTheDocument(); // Ensure combobox (dropdown) element is in the document
    expect(screen.getByText('Option 1')).toBeInTheDocument(); // Ensure Option 1 is present in the document
    expect(screen.getByText('Option 2')).toBeInTheDocument(); // Ensure Option 2 is present in the document
  });

  // Test for verifying the onChange function is called when an option is selected
  test('calls onChange when an option is selected', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} onChange={mockOnChange} />); // Rendering Dropdown with mock onChange

    // Simulating a change event to select 'Option 2'
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Option 2' } });

    // Verifying if onChange was called with the correct argument
    expect(mockOnChange).toHaveBeenCalledWith('Option 2');
  });

  // Test for checking if the Dropdown is disabled when the 'disabled' prop is set
  test('Dropdown is disabled when prop is set', () => {
    render(<Dropdown options={['Option 1']} onChange={mockOnChange} disabled />); // Rendering Dropdown with disabled prop

    // Verifying that the combobox (Dropdown) is disabled
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
