import React from 'react';
import styled from 'styled-components';
import YAxisTitle from './YAxisTitle';
import YAxisLable from './YAxisLable';
import { YAxisProps } from '../../types';

function AreaYAxis({ className }: YAxisProps) {
  const AREA_Y_AXIS_VALUES = [0, 25, 50, 75, 100];
  return (
    <AreaYAxisWrapper className={className}>
      <YAxisTitle title="area" />
      <YAxisLable values={AREA_Y_AXIS_VALUES} />
    </AreaYAxisWrapper>
  );
}
export default AreaYAxis;

const AreaYAxisWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
