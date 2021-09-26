// @flow

import type { GridType, CellType } from 'declarations';

const getRandomCellValue = (): CellType => {
  // fix flow error: number is incompatible with literal union (CellType)
  return (Math.round(Math.random()): any);
};

const getGridWithRandomCells = (size: number): GridType => {
  if (size < 1) throw new Error('size should be more then 0');

  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => {
      return getRandomCellValue();
    })
  );
};

export default getGridWithRandomCells;
