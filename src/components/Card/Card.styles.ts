import styled from 'styled-components';

// Container for the card component with styling for structure and alignment
export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 320px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Title styling with spacing for readability
export const CardTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

// Body text styling with adjusted font size for readability
export const CardBody = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
`;

// Footer styling with spacing and color adjustment for a subtle appearance
export const CardFooter = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: #777;
`;

// Image styling with defined width, aspect ratio, and spacing
export const CardImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px;
  object-fit: cover;
`;
