import React from 'react';
import { Spinner } from './Spinner';
import { vars } from '../../globals.css';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const rowStyle = {
  display: 'flex',
  gap: vars.spacing[3] as unknown as string,
  alignItems: 'center',
};

export const Sizes = () => (
  <div style={rowStyle}>
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
  </div>
);

export const Themed = () => (
  <div
    style={{
      display: 'flex',
      gap: vars.spacing[3] as unknown as string,
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

export const ReducedMotion = () => (
  <div style={rowStyle}>
    <Spinner ariaLabel="Reduced motion" />
    <span style={{ color: vars.color.theme.text.secondary }}>Respects prefers-reduced-motion</span>
  </div>
);
