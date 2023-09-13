# 원티드 프리온보딩 프론트엔드 12기 Week 4 과제 - 시계열 차트 구현

## 1. 참가자 프로필

|                                   사진                                    | 정보                                                                                                                                                                                                                                                                                                                                                  |
| :-----------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/ha-il" width=150px><br /> | - 성명: **김형우** <br /> - 원티드 가입 이메일: **hyeongwookim.dev@gmail.com** <br /> - 이력서: [링크](https://distinct-attraction-cde.notion.site/a5f3299269e045a0bfed0d7af7d869d4?pvs=4) <br /> - 개인 블로그: [링크](https://ha-il.github.io/) <br /> - 개인 프로젝트: [당신의 작업실(깃허브 저장소 링크)](https://github.com/ha-il/project-pixel) |

## 2. 디렉터리 구조

```shell
  ├ .husky # git hook 설정 자동화를 위한 husky 설정
  ├ src
  │ ├ components
  │ │ ├ AxisItems
  │ │ │ ├ AreaYAxis.tsx # 영역 그래프의 Y축 컴포넌트
  │ │ │ ├ BarYAxis.tsx # 막대 그래프의 Y축 컴포넌트
  │ │ │ ├ XAxis.tsx # 차트의 X축 컴포넌트
  │ │ │ ├ YAxisLable.tsx # Y축의 레이블 컴포넌트
  │ │ │ └ YAxisTitle.tsx # Y축의 제목 컴포넌트
  │ │ ├ AreaChart.tsx # 영역 그래프 컴포넌트
  │ │ ├ BarChart.tsx # 막대 그래프 컴포넌트
  │ │ ├ ChartLegends.tsx # 차트 범례 컴포넌트
  │ │ ├ FilteringButtons.tsx # 상단 필터링 버튼
  │ │ └ ToolTip.tsx # 차트 요소 호버시 렌더링되는 툴팁 컴포넌트
  │ ├ contexts
  │ │ └ filteringContext.tsx # 필터링 ID와 필터링 ID를 변경하는 함수를 porp으로 전달하는 context
  │ ├ utils
  │ │ ├ filterElementsWithInterval.ts # 시작 인덱스와, 인터벌을 입력하여 배열을 필터링하는 유틸 함수
  │ │ └ splitStringBySpace.ts # 공백을 기준으로 문자열을 분리하는 유틸 함수
  │ ├ App.tsx
  │ ├ index.css
  │ ├ index.tsx
  │ ├ mock_data.json
  │ └ types.ts # 애플리케이션 전반에 사용되는 tpye 모음 파일
  ├ .eslintrc.cjs # 코드 스타일 통일을 위한 esLint 설정
  └ .prettierrc.cjs # 코드 포맷팅을 위한 prettier 설정
```

## 3. 추가한 라이브러리

| 목적      | 이름              | 버전    | 링크                                                                                               |
| --------- | ----------------- | ------- | -------------------------------------------------------------------------------------------------- |
| 스타일    | styled-components | ^6.0.7  | [https://www.npmjs.com/package/styled-components](https://www.npmjs.com/package/styled-components) |
| 환경 설정 | prettier          | ^3.0.3  | [https://www.npmjs.com/package/prettier](https://www.npmjs.com/package/prettier)                   |
| 환경 설정 | husky             | ^8.0.3  | [https://www.npmjs.com/package/husky](https://www.npmjs.com/package/husky)                         |
| 환경 설정 | lint-staged       | ^14.0.1 | [https://www.npmjs.com/package/lint-staged](https://www.npmjs.com/package/lint-staged)             |

<br />

## 4. 프로젝트 배포 링크

**배포 링크**: [https://main--splendid-genie-4d7f13.netlify.app/](https://main--splendid-genie-4d7f13.netlify.app/)

## 5. 개발 환경에서 프로젝트 실행 방법

1. 터미널에서 이 저장소를 git clone 하거나, 이 저장소의 파일을 다운받아 압축을 해제한 뒤 터미널로 열어주세요.
   <br/>
2. 터미널에 아래와 같이 명령어를 입력합니다.

   ```
   # git clone 한 경우
   cd time-series-chart

   # 파일을 다운받은 경우
   cd time-series-chart-main
   ```

3. 터미널에 `npm install`을 입력하여 의존성을 설치합니다.
   <br/>

4. `npm start`를 입력하여 애플리케이션을 실행합니다.
   <br />

## 6. 데모 영상

|                                                   시계열 차트                                                    |
| :--------------------------------------------------------------------------------------------------------------: |
| 필터링 버튼 클릭 → 차트 필터링 → 차트 호버 → </br>툴팁 렌더링 → 막대 차트 클릭 → 해당 막대차트 ID로 차트 필터링  |
| ![chart-final](https://github.com/ha-il/time-series-chart/assets/108077643/fc59ea3d-062c-417d-a084-edad0e6dd901) |

## 7. 기능 구현 과정

### 7.1 과제 작업 준비

그동안에는 요구사항을 보고 바로 코드를 작성하곤 했는데, 이번 과제에서는 요구사항을 분석하고 예상되는 컴포넌트 구조를 미리 짜보는 등 작업 준비 과정에 시간을 썼습니다.

- **mock_data.json 분석**

  ```json
  {
    "2023-02-01 14:32:00": {
      "id": "성북구", // 지역 이름: ['성북구', '강남구', '노원구', '중랑구' ]
      "value_area": 46, // 영역 형태로 표시되는 그래프의 값
      "value_bar": 13111 // 바 형태로 표시되는 그래프의 값
    }
    //...
  }


  /*
  "0000-00-00 00:00:00"  // key는 '날짜 시간' 형태로 되어 있음
      "id":['성북구'|'강남구'|'노원구'|'중랑구']  // 지역 이름
      "value_area": number, // 영역 형태로 표시되는 그래프의 값
      "value_bar": number,  // 바 형태로 표시되는 그래프의 값
    },
  */
  ```

  </br>

- **과제 레이아웃 그려보기**
  ![IMG_6260](https://github.com/ha-il/time-series-chart/assets/108077643/5b1ab3af-e52d-4d32-9ccd-161ded5eba7e)
  </br>

- **레이아웃을 기준으로 컴포넌트 구조 예측해보기**
  필터링 관련 값과 함수는 필터링 버튼과 차트 등 여러 컴포넌트에 사용될 것이라 판단하여 처음부터 Context API 사용을 염두해뒀고, `FilteringProvider`도 미리 작성했습니다.
  </br>

  ```html
  <FilteringProvider filterService="{filterService}">
    <App>
      <FilteringButtons />
      <AreaYAxis>
        <YAxisTitle />
        <YAxis />
      </AreaYAxis>
      <Graphs>
        <BarGraph fiterdId="{fiterdId}" />
        <AreaGraph fiterdId="{fiterdId}" />
      </Graphs>
      <BarYAxis>
        <YAxisTitle />
        <YAxis />
      </BarYAxis>
      <XAxis />
      <Legends />
    </App>
  </FilteringProvider>
  ```

  </br>

- **추가 학습이 필요한 영역 그래프 구현 미리 연습해보기**
  CSS로 영역 그래프를 구현하는 [레퍼런스](https://css-tricks.com/how-to-make-an-area-chart-with-css/)를 참고하여 리액트 환경에서 미리 연습했습니다. ([해당 커밋 - feat: 영역 차트 프로토타입 제작](https://github.com/ha-il/time-series-chart/commit/0cce103fa4b1e8a7bd3016bdb6f0e483ab6f7fda))

  </br>
  - 미리 연습해본 영역 그래프

  ![area-proto](https://github.com/ha-il/time-series-chart/assets/108077643/4a36e51e-2c01-4783-84eb-f322ec34ff91)

  - 구현 코드

    ```jsx
    import React from 'react';
    import styled from 'styled-components';

    const DATA = [
      { id: 0, start: 0.1, end: 0.4, value: '40%' },
      { id: 1, start: 0.4, end: 0.8, value: '80%' },
      { id: 2, start: 0.8, end: 0.6, value: '60%' },
      { id: 3, start: 0.6, end: 1.0, value: '100%' },
      { id: 4, start: 1.0, end: 0.3, value: '30%' },
    ];

    const AreaChart = styled.ul`
      /* Reset */
      margin: 0;
      padding: 0;
      border: 0;

      /* Dimensions */
      width: 100%;
      max-width: var(--chart-width, 100%);
      height: var(--chart-height, 300px);

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
      background: var(--color, rgba(240, 50, 50, 0.75));
      clip-path: polygon(
        0% calc(100% * (${(props) => 1 - props.$start})),
        100% calc(100% * (${(props) => 1 - props.$end})),
        100% 100%,
        0% 100%
      );
    `;

    function App() {
      return (
        <div className="App">
          <AreaChart className="area-chart">
            {DATA.map(({ id, start, end }) => (
              <ChartList key={id} $start={start} $end={end} />
            ))}
          </AreaChart>
        </div>
      );
    }

    export default App;
    ```

### 7.2 과제 수행에서 중점을 둔 부분

- **Context API 사용**
  현재 필터링하고 있는 ID(지역이름)와 그것을 재설정하는 함수를 props로 쉽게 전달하기 위해 3주차 수업에서 학습했던 Context API를 사용했습니다.
  </br>

  ```tsx
  // ./src/contexts/filteringContext.tsx

  const FilteringContext = createContext<FilteringContextType>(null);

  export const useFiltering = (): Filterings => {
    const context = useContext(FilteringContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

  function FilteringProvider({ children }: FilteringProviderProps) {
    const [filteringId, setFilteringId] = useState('');

    const contextValue = useMemo(
      () => ({ filteringId, setFilteringId }),
      [filteringId],
    );

    return (
      <FilteringContext.Provider value={contextValue}>
        {children}
      </FilteringContext.Provider>
    );
  }
  export default FilteringProvider;
  ```

  ```tsx
  // ./src/index.tsx 파일에 FilteringProvider를 사용했습니다.

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
  );
  root.render(
    <React.StrictMode>
      <FilteringProvider>
        <App />
      </FilteringProvider>
    </React.StrictMode>,
  );
  ```

  ```tsx
  // ./src/components/FilteringButtons.tsx
  // 필터링 버튼을 누르면 필터링 ID가 바뀌어야 하기 떄문에,
  // FilteringButtons에 useFiltering 훅을 호출했습니다.

  function FilteringButtons() {
    // filteringContext를 사용하는 useFiltering 훅을 호출했습니다.
    const { filteringId, setFilteringId } = useFiltering();

    // 버튼 클릭 이벤트 핸들러 함수에 setFilteringId를 사용해 필터링 ID를 갱신합니다.
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
              // filterById 함수를 이벤트 핸들러 함수로 전달합니다.
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
  ```

  ```tsx
  // ./src/components/BarChart.tsx
  // 특정 데이터 영역 클릭시에도 필터링이 되어야 하는 요구사항이 있어서,
  // BarChart에도 useFiltering 훅을 호출했습니다.

  function BarChart({ chartValues, chartTimes }: ChartProps) {
    // filteringContext를 사용하는 useFiltering 훅을 호출했습니다.
    const { filteringId, setFilteringId } = useFiltering();

    // 막대 차트 요소의 클릭 이벤트 핸들러 함수에 setFilteringId를 사용해 필터링 ID를 갱신합니다.
    const filterByBar: MouseEventHandler<HTMLLIElement> = ({
      currentTarget,
    }) => {
      setFilteringId(currentTarget.dataset.id || '');
    };

    return (
      <BarChartWrapper>
        {chartValues.map((chartValue, idx) => (
          <Bar
            key={chartTimes[idx]}
            $valueBar={chartValue.value_bar}
            $isFilterd={chartValue.id === filteringId}
            // filterByBar 함수를 이벤트 핸들러 함수로 전달합니다.
            onClick={filterByBar}
            data-id={chartValue.id}
          >
            <ToolTip chartValue={chartValue} />
          </Bar>
        ))}
      </BarChartWrapper>
    );
  }
  export default BarChart;
  ```

  </br>

- **컴포넌트 구조**
  지난 3주차 팀 과제에서 제가 완성한 개인 과제를 기준으로 Best Practice를 도출하기 위해 리팩터링을 진행했는데, 컴포넌트 구조를 너무 깊게 구성하고 이름도 헷갈리게 지어서 팀원들이 상당히 곤란했었습니다. 이번에는 컴포넌트 구조의 깊이를 너무 깊게 구성하지 않고, 이름도 직관적으로 바로 알아볼 수 있도록 지으려 노력했습니다.

  ```html
  <div className="App">
    <FilteringButtons />
    <ChartWrapper>
      <AreaYAxis />
      <Charts>
        <BarChart />
        <AreaChart />
      </Charts>
      <BarYAxis />
      <XAxis />
    </ChartWrapper>
    <ChartLegends />
  </div>
  ```

  </br>

- **좀 더 추상적인 유틸 함수 사용**
  유틸 함수는 예전에도 만들어서 사용했지만, 재사용하기 어려운 네이밍과 구조로 만들었던 경우가 많았습니다. 이번에는 어떤 문자열이나 배열에서도 사용할 수 있도록 의미를 전달하기 위해 좀 더 추상적인 이름을 지어서 함수를 작성했습니다.

  인자가 3개 이상 필요한 경우 인자를 객체로 받도록 매개변수를 작성하여, 사용하는 입장에서 어떤 인자를 전달해야 하는지를 명확하게 알 수 있게 했습니다.
  </br>

  ```typescript
  // .src/utils/splitStringBySpace.ts

  function splitStringBySpace(inputString: string) {
    const parts = inputString.split(' ');
    return parts;
  }

  export default splitStringBySpace;
  ```

  ```typescript
  // .src/utils/filterElementsWithInterval.ts

  function filterElementsWithInterval({
    array,
    startIndex,
    interval,
  }: ArgsType) {
    const filteredElements = [];

    for (let i = startIndex; i < array.length; i += interval) {
      filteredElements.push(array[i]);
    }

    return filteredElements;
  }

  export default filterElementsWithInterval;
  ```

  ```tsx
  // .src/components/AxisItems/XAxis.tsx
  // 만든 유틸함수를 사용한 XAxis 컴포넌트 입니다.

  function XAxis({ chartTimes }: XAxisProps) {
    // splitStringBySpace 함수 사용
    const extractedTimes = chartTimes.map(
      (chartTime) => splitStringBySpace(chartTime)[1],
    );

    // filterElementsWithInterval 함수 사용
    // 인자를 객체로 전달하게 하여 의미를 파악하기 쉽게 했습니다.
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
  ```
