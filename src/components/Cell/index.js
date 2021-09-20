// @flow

import type { CellType } from 'declarations';
import styles from './index.module.css';

type Props = { value: CellType };

const Cell = ({ value }: Props) => (
  <div className={`${styles.container} ${styles[`bgColor--${value}`]}`} />
);

export default Cell;
