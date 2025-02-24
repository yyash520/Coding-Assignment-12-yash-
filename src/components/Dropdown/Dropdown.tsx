import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

const Select = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${(props) => (props.disabled ? '#e0e0e0' : '#fff')};
  color: ${(props) => (props.disabled ? '#888' : '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, disabled }) => {
  return (
    <Select onChange={(e) => onChange(e.target.value)} disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
