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

function App() {
  // TODO: 얼마 안 되는 데이터지만, 데이터가 늘어날 것을 대비해 메모이제이션 해줘야 함
  // const chartTime = Object.keys(MockData.response);
  const chartValues = Object.values(MockData.response);

  // TODO: grid 때문에 남긴 ClassName의 Type 통일해서 다뤄야 함.
  return (
    <div className="App">
      <FilteringButtons />
      <ChartWrapper>
        <AreaYAxis className="one" />
        <Charts className="two">
          <BarChart chartValues={chartValues} />
          <AreaChart />
        </Charts>
        <BarYAxis className="three" />
        <XAxis className="four" />
      </ChartWrapper>
      <ChartLegends />
    </div>
  );
}

export default App;

const ChartWrapper = styled.div`
  display: grid;
  height: 80vh;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 90% 10%;
  & .four {
    grid-column: 1 / 4;
  }
`;
const Charts = styled.div`
  background-color: goldenrod;
  position: relative;
`;
