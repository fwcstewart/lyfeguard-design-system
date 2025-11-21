import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div
    style={{ display: 'flex', gap: '12px', padding: '12px', background: 'var(--color-theme-surface)' }}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '14px', color: 'var(--color-theme-text-secondary)' }}>Variants</p>
        <Wrapper>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </Wrapper>
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '14px', color: 'var(--color-theme-text-secondary)' }}>Appearances</p>
        <Wrapper>
          <Badge appearance="pill" variant="success">Pill</Badge>
          <Badge appearance="solid" variant="success">Solid</Badge>
          <Badge appearance="outline" variant="success">Outline</Badge>
        </Wrapper>
      </div>
    </div>
  ),
};