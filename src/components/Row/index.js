// @flow

import { TEST_IDS } from 'constants/testIds';

import styles from './index.module.css';

type Props = { children: React$Node };

const Row = ({ children }: Props) => (
  <div className={styles.container} data-testid={TEST_IDS.GRID_ROW}>
    {children}
  </div>
);

export default Row;
