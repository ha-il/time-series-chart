type ArgsType = {
  array: string[];
  startIndex: number;
  interval: number;
};

function filterElementsWithInterval({ array, startIndex, interval }: ArgsType) {
  const filteredElements = [];

  for (let i = startIndex; i < array.length; i += interval) {
    filteredElements.push(array[i]);
  }

  return filteredElements;
}

export default filterElementsWithInterval;
