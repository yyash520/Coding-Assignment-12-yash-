import styled from 'styled-components';

export const StyledImg = styled.img`
  max-width: 100%;
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px; /* Slightly increased border radius for smoother edges */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Added subtle shadow */
  object-fit: cover; /* Ensures the image covers the area without distortion */
`;
