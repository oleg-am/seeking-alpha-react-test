import { render, within } from '@testing-library/react';
import { TEST_IDS } from 'constants/testIds';
import Grid from './index';

beforeEach(() => {
  jest.useFakeTimers();
});

test('Grid should renders with 50 rows and columns', () => {
  const { getAllByTestId } = render(<Grid size={50} tick={1000} />);

  const rowsElements = getAllByTestId(TEST_IDS.GRID_ROW);
  const colsElements = within(rowsElements[0]).getAllByTestId(
    TEST_IDS.GRID_CELL
  );

  expect(rowsElements.length).toEqual(50);
  expect(colsElements.length).toEqual(50);
});
