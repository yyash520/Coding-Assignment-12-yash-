import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './StyledButton';

const Button: React.FC<ButtonProps> = ({ text, disabled, onClick }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(); // Calls the passed onClick handler to show the success message
    }
  };

  return (
    <StyledButton disabled={disabled} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
