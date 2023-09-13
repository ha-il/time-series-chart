export type ChartValue = {
  id: string;
  value_area: number;
  value_bar: number;
};

export type ChartProps = {
  chartValues: ChartValue[];
  chartTimes: string[];
};
