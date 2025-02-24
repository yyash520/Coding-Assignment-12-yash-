import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

describe('RadioButton Component', () => {
  const mockOnChange = jest.fn();

  const defaultProps: RadioButtonProps = {
    name: 'test-radio',
    options: ['Option 1', 'Option 2'],
    onChange: mockOnChange,
    disabled: false,
  };

  test('renders the radio buttons correctly', () => {
    render(<RadioButton {...defaultProps} />);

    const option1 = screen.getByLabelText('Option 1');
    const option2 = screen.getByLabelText('Option 2');

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option1).toHaveAttribute('type', 'radio');
    expect(option2).toHaveAttribute('type', 'radio');
  });

  test('calls onChange when an option is selected', () => {
    render(<RadioButton {...defaultProps} />);

    const option1 = screen.getByLabelText('Option 1');
    fireEvent.click(option1);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('Option 1');
  });

  test('disables the radio buttons when disabled prop is true', () => {
    render(<RadioButton {...defaultProps} disabled={true} />);

    const option1 = screen.getByLabelText('Option 1');
    const option2 = screen.getByLabelText('Option 2');

    expect(option1).toBeDisabled();
    expect(option2).toBeDisabled();
  });

  test('does not call onChange when a disabled option is clicked', () => {
    render(<RadioButton {...defaultProps} disabled={true} />);

    const option1 = screen.getByLabelText('Option 1');
    fireEvent.click(option1);

    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
