import React from 'react';
import styled from 'styled-components';
import { ChartProps } from '../types';

function BarChart({ chartValues, chartTimes }: ChartProps) {
  return (
    <BarChartWrapper>
      {chartValues.map((chartValue, idx) => (
        <Bar key={chartTimes[idx]} $valueBar={chartValue.value_bar} />
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
  background-color: rgba(162, 155, 254, 1);
  margin-right: 1px;
  width: 16px;
  height: ${(props) => `${props.$valueBar / 200}%`};
`;
