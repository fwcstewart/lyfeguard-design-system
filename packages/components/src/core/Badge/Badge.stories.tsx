import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Core/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

const Wrapper: React.FC<React.PropsWithChildren<{ dark?: boolean }>> = ({ dark, children }) => (
  <div
    className={dark ? 'dark' : undefined}
    style={{ display: 'flex', gap: '12px', padding: '12px', background: dark ? '#0e1821' : '#fff' }}
  >
    {children}
  </div>
);

export const LightTheme: Story = {
  render: () => (
    <Wrapper>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </Wrapper>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <Wrapper dark>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </Wrapper>
  ),
};

export const Appearances: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '12px' }}>
      <Wrapper>
        <Badge appearance="pill" variant="success">
          Pill
        </Badge>
        <Badge appearance="solid" variant="success">
          Solid
        </Badge>
        <Badge appearance="outline" variant="success">
          Outline
        </Badge>
      </Wrapper>
      <Wrapper dark>
        <Badge appearance="pill" variant="error">
          Pill
        </Badge>
        <Badge appearance="solid" variant="error">
          Solid
        </Badge>
        <Badge appearance="outline" variant="error">
          Outline
        </Badge>
      </Wrapper>
    </div>
  ),
};

export const WithScreenReaderText: Story = {
  render: () => (
    <Wrapper>
      <Badge variant="info" srText="Sync status: updated">
        Synced
      </Badge>
    </Wrapper>
  ),
};