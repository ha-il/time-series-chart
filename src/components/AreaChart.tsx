import React from 'react';
import styled from 'styled-components';
import { ChartProps } from '../types';

function AreaChart({ chartValues, chartTimes }: ChartProps) {
  return (
    <AreaChartWrapper>
      {chartValues.map((chartValue, idx) => (
        <Area
          key={chartTimes[idx]}
          $valueAreaStart={chartValue.value_area}
          $valueAreaEnd={
            idx + 1 === chartValues.length ? 0 : chartValues[idx + 1].value_area
          }
        />
      ))}
    </AreaChartWrapper>
  );
}
export default AreaChart;

const AreaChartWrapper = styled.ul`
  position: absolute;
  bottom: 0;
  left: 8px;
  width: 100%;
  max-width: 100%;
  height: 50%;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: row;
  z-index: -1;
`;

const Area = styled.li<{ $valueAreaStart: number; $valueAreaEnd: number }>`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  background: var(--sub-color);
  clip-path: polygon(
    0% calc(100% * (${(props) => 1 - props.$valueAreaStart / 100})),
    100% calc(100% * (${(props) => 1 - props.$valueAreaEnd / 100})),
    100% 100%,
    0% 100%
  );
`;
