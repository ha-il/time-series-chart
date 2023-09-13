import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { ChartProps } from '../types';
import { useFiltering } from '../contexts/filteringContext';
import ToolTip from './ToolTip';

function BarChart({ chartValues, chartTimes }: ChartProps) {
  const { filteringId, setFilteringId } = useFiltering();

  const filterByBar: MouseEventHandler<HTMLLIElement> = ({ currentTarget }) => {
    setFilteringId(currentTarget.dataset.id || '');
  };

  return (
    <BarChartWrapper>
      {chartValues.map((chartValue, idx) => (
        <Bar
          key={chartTimes[idx]}
          $valueBar={chartValue.value_bar}
          $isFilterd={chartValue.id === filteringId}
          onClick={filterByBar}
          data-id={chartValue.id}
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
    props.$isFilterd ? 'var(--filtering-color)' : 'var(--main-color)'};
  width: 16px;
  height: ${(props) => `${props.$valueBar / 198}%`};
  margin-right: 1px;
  &:first-child {
    margin-left: 1px;
  }
  &:hover div {
    display: block;
  }
  position: relative;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;
`;
