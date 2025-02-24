import React from 'react';
import styled from 'styled-components';


const StyledTfoot = styled.tfoot`
  background-color: #ddd;
  font-weight: bold;
`;

const StyledTd = styled.td`
  border: 1px solid black;
  padding: 10px;
  text-align: left;
`;

type TableFooterProps = {
  footer: string[];
};

const TableFooter: React.FC<TableFooterProps> = ({ footer }) => {
  return (
    <StyledTfoot>
      <tr>
        {footer.map((cell, index) => (
          <StyledTd key={index}>{cell}</StyledTd>
        ))}
      </tr>
    </StyledTfoot>
  );
};

export default TableFooter;
