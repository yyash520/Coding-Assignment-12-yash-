import React from 'react';
import { ImgProps } from './Img.types';

const Img: React.FC<ImgProps> = ({ src, alt, width, height }) => {
  return (
    <img src={src} alt={alt} width={width} height={height} />
  );
};

export default Img;