import React from 'react';
import styled from 'styled-components';
import YAxisTitle from './YAxisTitle';
import YAxisLable from './YAxisLable';

function BarYAxis() {
  const BAR_Y_AXIS_VALUES = [5000, 10000, 15000, 20000];
  return (
    <BarYAxisWrapper>
      <YAxisLable values={BAR_Y_AXIS_VALUES} />
      <YAxisTitle title="bar" />
    </BarYAxisWrapper>
  );
}
export default BarYAxis;

const BarYAxisWrapper = styled.div`
  display: flex;
  justify-content: start;
`;
