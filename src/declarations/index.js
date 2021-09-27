// @flow

import { TEST_IDS } from 'constants/testIds';

export type TestIdType = $Keys<typeof TEST_IDS>;

export type CellType = 0 | 1;
export type GridType = Array<Array<CellType>>;
