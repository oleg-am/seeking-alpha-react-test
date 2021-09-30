// @flow

import type { TestIdType } from 'declarations';
import styles from './index.module.css';

type Props = { children: React$Node, testId: TestIdType };

const Row = ({ children, testId }: Props) => (
  <div className={styles.container} data-testid={testId}>
    {children}
  </div>
);

export default Row;
