import React from 'react';
import styled from 'styled-components';

function ChartLegends() {
  const LEGENDS_VALUES = [
    { id: 0, value: 'value_bar' },
    { id: 1, value: 'value_area' },
  ];
  return (
    <Legends>
      {LEGENDS_VALUES.map(({ id, value }) => (
        <li key={id}>
          <button type="button">{value}</button>
        </li>
      ))}
    </Legends>
  );
}
export default ChartLegends;

const Legends = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
