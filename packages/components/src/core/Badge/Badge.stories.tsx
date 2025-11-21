import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Core/Badge',
  component: Badge,
};

export const Variants = () => (
  <div style={{ display: 'flex', gap: '12px' }}>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="info">Info</Badge>
  </div>
);