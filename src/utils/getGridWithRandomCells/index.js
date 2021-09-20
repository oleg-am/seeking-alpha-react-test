// @flow

import type { GridType } from 'declarations';

const getRandomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getGridWithRandomCells = (size: number): GridType => {
  if (size < 1) throw new Error('size should be more then 0');

  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => {
      // fix flow error: number is incompatible with literal union (CellType)
      return (getRandomInteger(0, 1): any);
    })
  );
};

export default getGridWithRandomCells;
