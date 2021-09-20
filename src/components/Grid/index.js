// @flow

import { useState, useEffect } from 'react';
import getGridWithRandomCells from 'utils/getGridWithRandomCells';
import transformGrid from 'utils/transformGrid';
import Cell from 'components/Cell';

import styles from './index.module.css';

type Props = { size: number, tick: number };

const Grid = ({ size, tick }: Props) => {
  const [grid, setGrid] = useState(() => getGridWithRandomCells(size));

  useEffect(() => {
    const tickIntervalId = setInterval(() => {
      setGrid((grid) => transformGrid(grid));
    }, tick);

    return () => {
      clearInterval(tickIntervalId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {grid.map((row, i) => (
        <div key={i} className={styles.row}>
          {row.map((cell, i) => (
            <Cell key={`${i}_${cell}`} value={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
