import React from 'react';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({ content, size, color }) => {
  return <p style={{ fontSize: size, color }}>{content}</p>;
};

export default Text;
