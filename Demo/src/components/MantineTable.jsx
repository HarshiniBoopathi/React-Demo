
import React from 'react';
import { Table } from '@mantine/core';
import { data } from './makeData'; 
const MantineTable = () => {
  const rows = data.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.age}</td>
      <td>{element.job}</td>
    </tr>
  ));

  return (
    <Table withBorder withColumnBorders>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default MantineTable;
