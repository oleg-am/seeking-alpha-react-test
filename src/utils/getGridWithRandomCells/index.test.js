// @flow

import getGridWithRandomCells from './index';

test('Should return grid with rows and cols length the same as size argument', () => {
  const size = 50;
  const grid = getGridWithRandomCells(size);

  expect(grid.length).toEqual(size);
  expect(grid[0].length).toEqual(size);
});
