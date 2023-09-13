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
        <LegendElement key={id}>{value}</LegendElement>
      ))}
    </Legends>
  );
}
export default ChartLegends;

const Legends = styled.ul`
  margin: 16px 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

const LegendElement = styled.li`
  margin: 0 8px;
`;
