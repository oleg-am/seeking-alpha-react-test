// @flow

import { useState } from 'react';
import { TEST_IDS } from 'constants/testIds';
import useInterval from 'hooks/useInterval';
import getGridWithRandomCells from 'utils/getGridWithRandomCells';
import transformGrid from 'utils/transformGrid';
import Row from 'components/Row';
import Cell from 'components/Cell';

type Props = { size: number, tick: number };

const Grid = ({ size, tick }: Props) => {
  const [grid, setGrid] = useState(() => getGridWithRandomCells(size));

  useInterval(() => {
    setGrid((grid) => transformGrid(grid));
  }, tick);

  return (
    <div>
      {grid.map((row, i) => (
        <Row key={i} testId={TEST_IDS.GRID_ROW}>
          {row.map((cell, i) => (
            <Cell
              key={`${i}_${cell}`}
              value={cell}
              testId={TEST_IDS.GRID_CELL}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Grid;
