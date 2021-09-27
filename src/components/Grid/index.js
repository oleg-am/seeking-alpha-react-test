// @flow

import { useState } from 'react';
import { TEST_IDS } from 'constants/testIds';
import useInterval from 'hooks/useInterval';
import getGridWithRandomCells from 'utils/getGridWithRandomCells';
import transformGrid from 'utils/transformGrid';
import Cell from 'components/Cell';

import styles from './index.module.css';

type Props = { size: number, tick: number };

const Grid = ({ size, tick }: Props) => {
  const [grid, setGrid] = useState(() => getGridWithRandomCells(size));

  useInterval(() => {
    setGrid((grid) => transformGrid(grid));
  }, tick);

  return (
    <div>
      {grid.map((row, i) => (
        <div key={i} className={styles.row} data-testid={TEST_IDS.GRID_ROW}>
          {row.map((cell, i) => (
            <Cell
              key={`${i}_${cell}`}
              value={cell}
              testId={TEST_IDS.GRID_CELL}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
