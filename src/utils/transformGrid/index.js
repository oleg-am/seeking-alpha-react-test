// @flow

import getNeighborsCount from 'utils/getNeighborsCount';
import type { GridType, CellType } from 'declarations';

type TransformCellParamsType = { cell: CellType, neighborsCount: number };

const transformCell = ({
  cell,
  neighborsCount,
}: TransformCellParamsType): CellType => {
  if (cell) {
    //Any live cell with fewer than two live neighbours dies (underpopulation)
    if (neighborsCount < 2) return 0;
    // Any live cell with two or three live neighbours lives on to the next generation.
    if ([2, 3].includes(neighborsCount)) return 1;
    // Any live cell with more than three live neighbours dies (overcrowding).
    if (neighborsCount > 3) return 0;
  } else {
    // Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
    if (neighborsCount === 3) return 1;
  }

  return 0;
};

const transformGrid = (grid: GridType): GridType => {
  if (!grid.length) return grid;

  const rowLenth = grid.length;
  const colLenth = grid[0].length;
  const result = [];

  for (let row = 0; row < rowLenth; row++) {
    result[row] = [];
    for (let col = 0; col < colLenth; col++) {
      result[row][col] = transformCell({
        cell: grid[row][col],
        neighborsCount: getNeighborsCount({ grid, row, col }),
      });
    }
  }

  return result;
};

export default transformGrid;
