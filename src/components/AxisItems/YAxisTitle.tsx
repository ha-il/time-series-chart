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
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
`;
