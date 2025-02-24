import styled from 'styled-components';

export const StyledRadio = styled.input`
  margin-right: 8px; /* Slightly increased space for better alignment */
  accent-color: #007BFF; /* Custom color for the radio button */
  cursor: pointer; /* Ensures pointer cursor for better UX */
`;

export const StyledLabel = styled.label`
  margin-right: 12px; /* Increased space for better separation */
  cursor: pointer;
  font-size: 16px; /* Set a readable font size */
  color: #333; /* Set a dark color for better text visibility */
  transition: color 0.3s ease; /* Smooth transition for color on hover */

  &:hover {
    color: #007BFF; /* Change color on hover to blue */
  }
`;
