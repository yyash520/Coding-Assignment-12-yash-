import styled from 'styled-components';

// Styled component for the button with dynamic styles based on the disabled state
export const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#B0B0B0' : '#007BFF')};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#B0B0B0' : '#0056b3')};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px ${(props) => (props.disabled ? 'transparent' : '#0056b3')};
  }
`;
