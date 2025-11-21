import React, { useState, useEffect } from 'react';
import { ProgressBar } from './ProgressBar';
import { vars } from '../../globals.css';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
};

export const Default = () => (
  <div
    style={{
      background: vars.color.theme.background,
      color: vars.color.theme.text.primary,
      padding: vars.spacing[6] as unknown as string,
      borderRadius: vars.radius.lg,
      display: 'flex',
      flexDirection: 'column',
      gap: vars.spacing[4],
      maxWidth: '420px',
    }}
  >
    <ProgressBar progress={72} label="Profile completion" size="md" />
    <ProgressBar progress={32} label="Uploading" size="sm" />
    <ProgressBar progress={94} label="Syncing" size="lg" />
  </div>
);

export const Animated = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 800);
    return () => clearInterval(interval);
  }, []);
  return <ProgressBar progress={value} label="Animated" />;
};