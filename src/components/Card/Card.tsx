import React from 'react';
import { CardContainer, CardTitle, CardBody, CardFooter, CardImage } from './Card.styles';

interface CardProps {
  title: string;
  content: string;
  imageSrc?: string;  
  altText?: string;
  footer?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageSrc, altText, footer }) => {
  return (
    <CardContainer>
      {/* Conditionally display the image if imageSrc is provided */}
      {imageSrc && <CardImage src={imageSrc} alt={altText} />}
      <div className="card-body">
        <CardTitle>{title}</CardTitle>
        <CardBody>{content}</CardBody>
      </div>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
