import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders Text with default size and color', () => {
  render(<Text content="Hello World!" />);
  expect(screen.getByText('Hello World!')).toBeInTheDocument();
});

test('renders Text with specific color', () => {
  render(<Text content="Hello World!" color="red" />);
  expect(screen.getByText('Hello World!')).toHaveStyle('color: red');
});
