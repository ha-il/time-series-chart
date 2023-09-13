import React from 'react';
import styled from 'styled-components';
import YAxisTitle from './YAxisTitle';
import YAxisLable from './YAxisLable';

function AreaYAxis() {
  const AREA_Y_AXIS_VALUES = [50, 100, 150, 200];
  return (
    <AreaYAxisWrapper>
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
