import React from 'react';
import styled from 'styled-components';

import splitStringBySpace from '../../utils/splitStringBySpace';
import filterElementsWithInterval from '../../utils/filterElementsWithInterval';

type XAxisProps = {
  chartTimes: string[];
};

function XAxis({ chartTimes }: XAxisProps) {
  const extractedTimes = chartTimes.map(
    (chartTime) => splitStringBySpace(chartTime)[1],
  );
  const filteredTimes = filterElementsWithInterval({
    array: extractedTimes,
    startIndex: 1,
    interval: 7,
  });

  return (
    <XAxisWrapper className="x_axis">
      {filteredTimes.map((time) => (
        <XAxisValue key={time}>
          <span>|</span>
          <span>{time}</span>
        </XAxisValue>
      ))}
    </XAxisWrapper>
  );
}
export default XAxis;

const XAxisWrapper = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
`;

const XAxisValue = styled.li`
  font-size: 0.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
