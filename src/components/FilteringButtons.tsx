import React from 'react';
import styled from 'styled-components';

function FilteringButtons() {
  const BUTTONS_VALUES = [
    { id: 0, value: '해제' },
    { id: 1, value: '성북구' },
    { id: 2, value: '강남구' },
    { id: 3, value: '노원구' },
    { id: 4, value: '중랑구' },
  ];
  return (
    <Buttons>
      {BUTTONS_VALUES.map(({ id, value }) => (
        <li key={id}>
          <button type="button">{value}</button>
        </li>
      ))}
    </Buttons>
  );
}
export default FilteringButtons;

const Buttons = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
