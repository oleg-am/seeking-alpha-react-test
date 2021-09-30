// @flow
import { memo } from 'react';
import type { CellType, TestIdType } from 'declarations';
import styles from './index.module.css';

type Props = { value: CellType, testId: TestIdType };

const Cell = ({ value, testId }: Props) => (
  <div
    className={`${styles.container} ${styles[`bgColor--${value}`]}`}
    data-testid={testId}
  />
);

export default memo(Cell);
