// @flow

import type { GridType, CellType } from 'declarations';
import sum from 'utils/sum';

type GetNeighborsParamsType = { grid: GridType, row: number, col: number };

const getNeighborsCount = ({
  grid,
  row,
  col,
}: GetNeighborsParamsType): number => {
  const currentRow = grid[row];
  const topRow = grid[row - 1] || [];
  const bottomRow = grid[row + 1] || [];

  const neighbors: { [string]: ?CellType } = {
    left: currentRow[col - 1],
    right: currentRow[col + 1],

    top: topRow[col],
    topLeft: topRow[col - 1],
    topRight: topRow[col + 1],

    bottom: bottomRow[col],
    bottomLeft: bottomRow[col - 1],
    bottomRight: bottomRow[col + 1],
  };

  return sum(Object.values(neighbors));
};

export default getNeighborsCount;
