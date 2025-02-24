import React from 'react';
import { TableProps } from './Table.types';
import TableFooter from './TableFooter';
import styled from 'styled-components';

// Styled Table Components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #ddd; /* Lighter border color for a softer look */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Added subtle shadow for depth */
  margin-top: 20px; /* Adds space at the top */
`;

const StyledTh = styled.th`
  border: 1px solid #ddd; /* Lighter border color */
  padding: 12px;
  background-color: #007BFF; /* Blue background for header */
  color: white; /* White text color for contrast */
  text-align: left; /* Left-align the header text */
  font-weight: bold; /* Bold text for headers */
`;

const StyledTd = styled.td`
  border: 1px solid #ddd; /* Lighter border color */
  padding: 12px;
  text-align: left; /* Left-align the text */
  font-size: 16px; /* Ensures readability */
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9; /* Light gray for even rows */
  }

  &:hover {
    background-color: #f1f1f1; /* Slightly darker background on hover */
    cursor: pointer; /* Adds pointer cursor for better interaction */
  }
`;


const Table: React.FC<TableProps> = ({ headers, rows, footer }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTh key={index}>{header}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <StyledTr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <StyledTd key={cellIndex}>{cell}</StyledTd>
            ))}
          </StyledTr>
        ))}
      </tbody>
      <TableFooter footer={footer} />
    </StyledTable>
  );
};

export default Table;
