import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { vars } from '../../globals.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'dark', 'danger', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const rowStyle = {
  display: 'flex',
  gap: vars.spacing[3] as unknown as string,
  alignItems: 'center',
  flexWrap: 'wrap',
};

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={rowStyle}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={rowStyle}>
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="md">
        Medium
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[4] as unknown as string }}>
      <div style={rowStyle}>
        <Button variant="primary">Default</Button>
        <Button variant="primary" data-state="hover">
          Hover
        </Button>
        <Button variant="primary" data-state="active">
          Active
        </Button>
        <Button variant="primary" data-state="focus">
          Focus
        </Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="primary" isLoading>
          Loading
        </Button>
      </div>
      <div style={rowStyle}>
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" data-state="hover">
          Hover
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button variant="secondary" isLoading>
          Loading
        </Button>
      </div>
      <div style={rowStyle}>
        <Button variant="ghost">Default</Button>
        <Button variant="ghost" data-state="hover">
          Hover
        </Button>
        <Button variant="ghost" data-state="focus">
          Focus
        </Button>
        <Button variant="ghost" disabled>
          Disabled
        </Button>
        <Button variant="ghost" isLoading>
          Loading
        </Button>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={rowStyle}>
      <Button iconLeft={<span aria-hidden>★</span>}>Starred</Button>
      <Button iconRight={<span aria-hidden>→</span>} variant="secondary">
        Next
      </Button>
      <Button iconLeft={<span aria-hidden>✓</span>} variant="ghost">
        Confirmed
      </Button>
    </div>
  ),
};
