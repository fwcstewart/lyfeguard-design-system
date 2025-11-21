import React from 'react';
import { Spinner } from './Spinner';
import { vars } from '../../globals.css';

export default {
  title: 'Core/Spinner',
  component: Spinner,
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
  </div>
);

export const LightAndDark = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <span>Light theme</span>
      <Spinner ariaLabel="Loading in light theme" />
    </div>

    <div
      className="dark"
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        padding: vars.spacing[3] as unknown as string,
        borderRadius: vars.radius.md,
        background: vars.color.neutral900,
      }}
    >
      <span style={{ color: vars.color.neutral0 }}>Dark theme</span>
      <Spinner ariaLabel="Loading in dark theme" />
    </div>
  </div>
);