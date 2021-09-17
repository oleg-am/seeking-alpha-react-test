// @flow

const sum = (arr: Array<mixed>): number =>
  arr.reduce((sum, value) => sum + (Number(value) || 0), 0);

export default sum;
