// @flow

import Grid from 'components/Grid';

const tick = 0.4 * 1000; // 0.4s
const size = 50; // row x col

const App = () => {
  return <Grid size={size} tick={tick} />;
};

export default App;
