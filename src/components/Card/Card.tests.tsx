import { render, screen } from '@testing-library/react'; // Importing render and screen methods from testing library
import Card from './Card'; // Importing the Card component for testing

// Grouping all tests related to the Card component using describe
describe('Card Component', () => {

  // Test to check if the card is rendered with title, content, and footer
  test('renders the card with the title, content, and footer', () => {
    // Rendering the Card with title, content, and footer props
    render(
      <Card
        title="Test Card"
        content="Test content"
        footer="Test footer"
      />
    );

    // Checking if the title text is rendered in the document
    expect(screen.getByText(/Test Card/i)).toBeInTheDocument();

    // Checking if the content text is rendered in the document
    expect(screen.getByText(/Test content/i)).toBeInTheDocument();

    // Checking if the footer text is rendered in the document
    expect(screen.getByText(/Test footer/i)).toBeInTheDocument();
  });

  // Test to check if the image is rendered when the image source is provided
  test('renders the image if provided', () => {
    // Rendering the Card with imageSrc and altText props
    render(
      <Card
        title="Test Card"
        content="Test content"
        imageSrc="https://via.placeholder.com/150"
        altText="Card Image"
      />
    );

    // Checking if the image with the correct alt text is rendered in the document
    expect(screen.getByAltText(/Card Image/i)).toBeInTheDocument();
  });

  // Test to check if the image is not rendered when image source is not provided
  test('does not render an image if not provided', () => {
    // Rendering the Card without the imageSrc and altText props
    render(
      <Card
        title="Test Card"
        content="Test content"
      />
    );

    // Ensuring that no image with the alt text is present in the document
    expect(screen.queryByAltText(/Card Image/i)).toBeNull();
  });
});
