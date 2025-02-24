import React from 'react';

type LabelProps = {
  text: string;
  color?: string;
};

const Label: React.FC<LabelProps> = ({ text, color }) => {
  return <span style={{ color }}>{text}</span>;
};

export default Label;