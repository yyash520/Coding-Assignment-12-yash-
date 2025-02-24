import { render, screen, fireEvent } from '@testing-library/react'; // Importing the necessary functions from testing library
import Button from './Button'; // Importing the Button component for testing

// Test to check if the Button is visible in the document
test('Button is visible', () => {
  // Rendering the Button with a text prop
  render(<Button text="Click Me" onClick={() => {}} />);

  // Assert that the button with text 'Click Me' is present in the document
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

// Test to check if the success message appears when the Button is clicked
test('Button shows success message when clicked', () => {
  // Rendering the Button with text 'Click Me' and an empty onClick handler
  render(<Button text="Click Me" onClick={() => {}} />);

  // Simulate a click event on the button
  fireEvent.click(screen.getByText('Click Me'));

  // Assert that the success message is displayed after the click
  expect(screen.getByText('Button clicked successfully!')).toBeInTheDocument();
});

// Test to check if the Button changes color when disabled
test('Button changes color when disabled', () => {
  // Rendering the Button with the 'disabled' prop set to true
  render(<Button text="Disabled" disabled={true} onClick={() => {}} />);

  // Assert that the button's background color is grey when disabled
  expect(screen.getByText('Disabled')).toHaveStyle('background-color: grey');
});
