import React from 'react';
import styled from 'styled-components';

type YAxisLableProps = {
  values: number[];
};

function YAxisLable({ values }: YAxisLableProps) {
  return (
    <YAxisLableWrapper>
      {values.map((value) => (
        <YAxisLableValue key={value}>{value}</YAxisLableValue>
      ))}
    </YAxisLableWrapper>
  );
}
export default YAxisLable;

const YAxisLableWrapper = styled.ul`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  background-color: cornflowerblue;
`;

const YAxisLableValue = styled.li`
  border-bottom: 1px solid black;
  height: 25%;
  font-size: 0.5rem;
  &:first-child {
    border-bottom: none;
  }
`;
