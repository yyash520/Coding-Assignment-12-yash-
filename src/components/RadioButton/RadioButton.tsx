import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledRadio = styled.input`
  margin-right: 8px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({ name, options, onChange, disabled }) => {
  return (
    <div>
      {options.map((option, index) => (
        <StyledLabel key={index}>
          <StyledRadio
            type="radio"
            name={name}
            value={option}
            disabled={disabled}
            onChange={() => onChange(option)}
          />
          {option}
        </StyledLabel>
      ))}
    </div>
  );
};

export default RadioButton;
export type { RadioButtonProps };
