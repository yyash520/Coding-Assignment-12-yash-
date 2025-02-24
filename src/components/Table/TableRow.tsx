import React from 'react';
import { TableRowProps } from './Table.types';

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  return (
    <tr>
      {row.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
    </tr>
  );
};

export default TableRow;