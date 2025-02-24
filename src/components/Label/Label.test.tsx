import React from 'react'; // ✅ Required for JSX in tests
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  test('renders Label with text', () => {
    render(<Label text="Test Label" />); // ✅ Ensure Label.tsx is correctly imported
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('applies color correctly', () => {
    render(<Label text="Colored Label" color="red" />);
    const labelElement = screen.getByText(/Colored Label/i);
    expect(labelElement).toHaveStyle({ color: 'red' }); // ✅ Ensures color is applied
  });
});
