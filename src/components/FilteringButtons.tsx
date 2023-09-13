import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { useFiltering } from '../contexts/filteringContext';

const BUTTONS_VALUES = [
  { id: 0, value: '해제' },
  { id: 1, value: '성북구' },
  { id: 2, value: '강남구' },
  { id: 3, value: '노원구' },
  { id: 4, value: '중랑구' },
];

function FilteringButtons() {
  const { filteringId, setFilteringId } = useFiltering();

  const filterById: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    setFilteringId(currentTarget.value);
  };

  return (
    <Buttons>
      {BUTTONS_VALUES.map(({ id, value }) => (
        <li key={id}>
          <Button
            type="button"
            onClick={filterById}
            value={value}
            $isSelected={value === filteringId}
            $value={value}
          >
            {value}
          </Button>
        </li>
      ))}
    </Buttons>
  );
}
export default FilteringButtons;

const Buttons = styled.ul`
  display: flex;
  margin: 0 0 16px 0;
`;

const Button = styled.button<{ $isSelected: boolean; $value: string }>`
  background-color: ${(props) =>
    props.$isSelected && props.$value !== '해제'
      ? 'var(--main-color)'
      : 'white'};
  color: ${(props) =>
    props.$isSelected && props.$value !== '해제' ? 'white' : 'black'};
  border: 2px solid var(--main-color);
  border-radius: 8px;
  padding: 4px 16px;
  margin: 0 8px 0 0;
  cursor: pointer;
  font-weight: 700;
`;
