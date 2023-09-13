import React from 'react';
import styled from 'styled-components';
import { ChartValue } from '../types';

type ToolTipProps = {
  chartValue: ChartValue;
};

function ToolTip({ chartValue }: ToolTipProps) {
  return (
    <ToolTipWrapper className="tool_tip">
      <div>ID: {chartValue.id}</div>
      <div>value_bar: {chartValue.value_bar}</div>
      <div>value_area: {chartValue.value_area}</div>
    </ToolTipWrapper>
  );
}
export default ToolTip;

const ToolTipWrapper = styled.div`
  display: none;
  font-size: 0.5rem;
  width: 80px;
  height: 80px;
  position: absolute;
  background-color: blue;
  z-index: 100;
  top: -40px;
  right: 8px;
`;
