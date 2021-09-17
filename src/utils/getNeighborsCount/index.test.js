// @flow

import getNeighborsCount from './index';

test('Should return correct count of neighbors', () => {
  const grid = [
    [0, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
  ];

  expect(getNeighborsCount({ grid, row: 0, col: 0 })).toEqual(3);
  expect(getNeighborsCount({ grid, row: 0, col: 1 })).toEqual(2);
  expect(getNeighborsCount({ grid, row: 0, col: 2 })).toEqual(3);
  expect(getNeighborsCount({ grid, row: 0, col: 3 })).toEqual(0);
  expect(getNeighborsCount({ grid, row: 0, col: 4 })).toEqual(1);

  expect(getNeighborsCount({ grid, row: 1, col: 1 })).toEqual(2);

  expect(getNeighborsCount({ grid, row: 2, col: 2 })).toEqual(4);

  expect(getNeighborsCount({ grid, row: 4, col: 2 })).toEqual(5);
});
