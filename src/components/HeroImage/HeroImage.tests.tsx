// HeroImage.tests.tsx
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('renders the hero image with overlay text', () => {
    render(
      <HeroImage
        src= "/static/images/harrypotter.jpg"
        alt="Hero Image"
        overlayText="Welcome!"
      />
    );
    expect(screen.getByAltText(/Hero Image/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
  });

  test('does not render overlay text if not provided', () => {
    render(
      <HeroImage
        src="/static/images/harry-potter.jpg"
        alt="Hero Image"
      />
    );
    expect(screen.queryByText(/Welcome!/i)).toBeNull();
  });
});
