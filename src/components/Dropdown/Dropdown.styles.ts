import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 10px;
  border: 2px solid #007BFF; /* Changed to a blue border */
  border-radius: 8px; /* Increased border radius */
  background-color: #f0f0f0; /* Lighter background color */
  cursor: pointer;

  &:disabled {
    background-color: #e0e0e0; /* Subtle disabled color */
    cursor: not-allowed;
  }
`;
