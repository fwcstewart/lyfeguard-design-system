import React, { useState, useEffect } from 'react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'Core/ProgressBar',
  component: ProgressBar,
};

export const Animated = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <ProgressBar progress={value} />;
};