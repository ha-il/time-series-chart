import React from 'react';
import styled from 'styled-components';
import { ChartProps } from '../types';
import { useFiltering } from '../contexts/filteringContext';
import ToolTip from './ToolTip';

function BarChart({ chartValues, chartTimes }: ChartProps) {
  const { filteringId } = useFiltering();
  return (
    <BarChartWrapper>
      {chartValues.map((chartValue, idx) => (
        <Bar
          key={chartTimes[idx]}
          $valueBar={chartValue.value_bar}
          $isFilterd={chartValue.id === filteringId}
        >
          <ToolTip chartValue={chartValue} />
        </Bar>
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

const Bar = styled.li<{ $valueBar: number; $isFilterd: boolean }>`
  background-color: ${(props) =>
    props.$isFilterd ? 'rgba(108, 92, 231,1.0)' : 'rgba(162, 155, 254, 1)'};
  width: 16px;
  height: ${(props) => `${props.$valueBar / 197}%`};
  margin-right: 1px;
  &:first-child {
    margin-left: 1px;
  }
  &:hover .tool_tip {
    display: block;
  }
  position: relative;
`;
