import React from 'react';
import styled from 'styled-components';
import { ChartValue } from '../types';

type ToolTipProps = {
  chartValue: ChartValue;
};

function ToolTip({ chartValue }: ToolTipProps) {
  return (
    <ToolTipWrapper>
      <ToolTipTitle>ID: {chartValue.id}</ToolTipTitle>
      <div>value_bar: </div>
      <div>{chartValue.value_bar}</div>
      <div>value_area: </div>
      <div>{chartValue.value_area}</div>
    </ToolTipWrapper>
  );
}
export default ToolTip;

const ToolTipWrapper = styled.div`
  display: none;
  font-size: 0.5rem;
  width: 60px;
  height: 80px;
  position: absolute;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  top: -40px;
  left: 4px;
  border-radius: 8px;
  padding: 8px;
`;

const ToolTipTitle = styled.div`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`;
