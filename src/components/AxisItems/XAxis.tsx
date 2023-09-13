import React from 'react';
import styled from 'styled-components';

import splitStringBySpace from '../../utils/splitStringBySpace';
import filterElementsWithInterval from '../../utils/filterElementsWithInterval';

type XAxisProps = {
  className: string;
  chartTimes: string[];
};

function XAxis({ className, chartTimes }: XAxisProps) {
  const extractedTimes = chartTimes.map(
    (chartTime) => splitStringBySpace(chartTime)[1],
  );
  const filteredTimes = filterElementsWithInterval({
    array: extractedTimes,
    startIndex: 1,
    interval: 7,
  });

  return (
    <XAxisWrapper className={className}>
      {filteredTimes.map((time) => (
        <XAxisValue key={time}>{time}</XAxisValue>
      ))}
    </XAxisWrapper>
  );
}
export default XAxis;

const XAxisWrapper = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: tomato;
`;

const XAxisValue = styled.li`
  font-size: 0.5rem;
`;
