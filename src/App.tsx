import React from 'react';
import styled from 'styled-components';

const DATA = [
  { id: 0, start: 0.4, end: 0.8, value: '40%' },
  { id: 1, start: 0.8, end: 0.6, value: '80%' },
  { id: 2, start: 0.6, end: 1.0, value: '60%' },
  { id: 3, start: 1.0, end: 0.3, value: '100%' },
  { id: 4, start: 0.3, end: 0, value: '30%' },
];

/*
{ id: 0, start: 0.1, end: 0.4, value: '40%' },
{ id: 1, start: 0.4, end: 0.8, value: '80%' },
{ id: 2, start: 0.8, end: 0.6, value: '60%' },
{ id: 3, start: 0.6, end: 1.0, value: '100%' },
{ id: 4, start: 1.0, end: 0.3, value: '30%' },
*/

const AreaChart = styled.ul`
  /* Reset */
  margin: 0;
  padding: 0;
  border: 0;

  /* Dimensions */
  width: 100%;
  max-width: 100%;
  height: 300px;

  /* Layout */
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: row;

  list-style: none;
`;

const ChartList = styled.li<{ $start: number; $end: number }>`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  background: rgba(240, 50, 50, 0.75);
  clip-path: polygon(
    0% calc(100% * (${(props) => 1 - props.$start})),
    100% calc(100% * (${(props) => 1 - props.$end})),
    100% 100%,
    0% 100%
  );
  &:hover span {
    display: block;
  }
  position: relative;
`;

const ToolTipText = styled.span`
  display: none;
  left: 40%;
  bottom: 0%;
  position: absolute;
  max-width: 200px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  font-size: 0.8em;
  color: black;
  background: deeppink;
  z-index: 2;
`;

function ToolTip({ text }: { text: string }) {
  return <ToolTipText>{text}</ToolTipText>;
}

function App() {
  return (
    <div className="App">
      <AreaChart className="area-chart">
        {DATA.map(({ id, start, end, value }) => (
          <ChartList key={id} $start={start} $end={end}>
            <ToolTip text={value} />
          </ChartList>
        ))}
      </AreaChart>
    </div>
  );
}

export default App;
