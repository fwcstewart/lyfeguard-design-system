import React from 'react';
import { Spinner } from './Spinner';

export default {
  title: 'Core/Spinner',
  component: Spinner,
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Spinner size={16} />
    <Spinner size={24} />
    <Spinner size={32} />
    <Spinner size={48} />
  </div>
);