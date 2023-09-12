import React from 'react';
import styled from 'styled-components';

export type ChartValue = {
  id: string;
  value_area: number;
  value_bar: number;
};

type ChartProps = {
  chartValues: ChartValue[];
};

function BarChart({ chartValues }: ChartProps) {
  return (
    <BarChartWrapper>
      {chartValues.map((chartValue) => (
        <Bar key={chartValue.id} $valueBar={chartValue.value_bar} />
      ))}
    </BarChartWrapper>
  );
}
export default BarChart;

const BarChartWrapper = styled.ul`
  display: flex;
  align-items: end;
  height: 100%;
`;

const Bar = styled.li<{ $valueBar: number }>`
  background-color: skyblue;
  border: 1px solid black;
  width: 16px;
  height: ${(props) => `${props.$valueBar / 200}%`};
`;
