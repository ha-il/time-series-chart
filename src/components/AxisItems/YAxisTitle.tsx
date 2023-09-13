import React from 'react';
import styled from 'styled-components';

type YAxisTitleProps = {
  title: string;
};

function YAxisTitle({ title }: YAxisTitleProps) {
  return (
    <YAxisTitleWrapper>
      <span>{title}</span>
    </YAxisTitleWrapper>
  );
}
export default YAxisTitle;

const YAxisTitleWrapper = styled.div`
  height: 100%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    writing-mode: vertical-rl;
  }
`;
