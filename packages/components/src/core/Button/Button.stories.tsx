import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button'
  }
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary">Default</Button>
        <Button variant="primary" data-state="hover">Hover</Button>
        <Button variant="primary" data-state="active">Active</Button>
        <Button variant="primary" data-state="focus">Focus</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" isLoading>Loading</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" data-state="hover">Hover</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="secondary" isLoading>Loading</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="tertiary">Default</Button>
        <Button variant="tertiary" data-state="hover">Hover</Button>
        <Button variant="tertiary" disabled>Disabled</Button>
        <Button variant="tertiary" isLoading>Loading</Button>
      </div>
    </div>
  )
};
