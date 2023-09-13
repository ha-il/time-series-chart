import React from 'react';
import styled from 'styled-components';
import FilteringButtons from './components/FilteringButtons';
import ChartLegends from './components/ChartLegends';
import AreaYAxis from './components/AxisItems/AreaYAxis';
import BarYAxis from './components/AxisItems/BarYAxis';
import XAxis from './components/AxisItems/XAxis';

import AreaChart from './components/AreaChart';
import MockData from './mock_data.json';
import BarChart from './components/BarChart';

const chartTimes = Object.keys(MockData.response);
const chartValues = Object.values(MockData.response);

function App() {
  return (
    <div className="App">
      <FilteringButtons />
      <ChartWrapper>
        <AreaYAxis />
        <Charts>
          <BarChart chartValues={chartValues} chartTimes={chartTimes} />
          <AreaChart chartValues={chartValues} chartTimes={chartTimes} />
        </Charts>
        <BarYAxis />
        <XAxis chartTimes={chartTimes} />
      </ChartWrapper>
      <ChartLegends />
    </div>
  );
}

export default App;

const ChartWrapper = styled.div`
  display: grid;
  height: 80vh;
  grid-template-columns: 1fr 90% 1fr;
  grid-template-rows: 95% 5%;
  & .x_axis {
    grid-column: 2 / 3;
  }
  justify-items: stretch;
`;
const Charts = styled.div`
  position: relative;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;
