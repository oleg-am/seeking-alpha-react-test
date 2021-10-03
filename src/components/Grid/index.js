// @flow

import { useState, useCallback } from 'react';
import { TEST_IDS } from 'constants/testIds';
import useInterval from 'hooks/useInterval';
import getGridWithRandomCells from 'utils/getGridWithRandomCells';
import transformGrid from 'utils/transformGrid';
import Row from 'components/Row';
import Cell from 'components/Cell';

type Props = { size: number, tick: number };

const Grid = ({ size, tick }: Props) => {
  const [grid, setGrid] = useState(() => getGridWithRandomCells(size));

  const setTransformedGrid = useCallback(
    () => setGrid((grid) => transformGrid(grid)),
    []
  );

  useInterval(setTransformedGrid, tick);

  return (
    <div>
      {grid.map((row, i) => (
        <Row key={`row${i}`} testId={TEST_IDS.GRID_ROW}>
          {row.map((cell, j) => (
            <Cell
              key={`row${i}_cell${j}`}
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
