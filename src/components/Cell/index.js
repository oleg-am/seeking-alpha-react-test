// @flow
import { memo } from 'react';
import type { CellType } from 'declarations';
import { TEST_IDS } from 'constants/testIds';

import styles from './index.module.css';

type Props = { value: CellType };

const Cell = ({ value }: Props) => (
  <div
    className={`${styles.container} ${styles[`bgColor--${value}`]}`}
    data-testid={TEST_IDS.GRID_CELL}
  />
);

export default memo(Cell);
