import React from 'react';
import { Spinner } from './Spinner';
import { vars } from '../../globals.css';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
  </div>
);

export const Themed = () => (
  <div
    style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      padding: vars.spacing[3] as unknown as string,
      borderRadius: vars.radius.md,
      background: vars.color.theme.background,
      color: vars.color.theme.text.primary,
    }}
  >
    <span>Loading</span>
    <Spinner ariaLabel="Loading" />
  </div>
);