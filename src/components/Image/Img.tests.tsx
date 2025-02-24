import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img component', () => {
  it('renders correctly with given props', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" width={150} height={150} />);
    const image = screen.getByAltText('Placeholder Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
    expect(image).toHaveAttribute('width', '150');
    expect(image).toHaveAttribute('height', '150');
  });

  it('renders an image with a fallback src when no src is provided', () => {
    render(<Img src="" alt="Placeholder Image" width={150} height={150} />);
    const image = screen.getByAltText('Placeholder Image');
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');  // Assuming fallback URL
  });
});
