// @flow

import { useEffect } from 'react';

const useInterval = (func: Function, delay: number) => {
  useEffect(() => {
    const intervalId = setInterval(func, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
};

export default useInterval;
