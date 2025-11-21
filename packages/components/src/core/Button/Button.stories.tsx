import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonSize, type ButtonState, type ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
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

const variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];
const stateConfigs: { label: string; state?: ButtonState; disabled?: boolean; isLoading?: boolean }[] = [
  { label: 'Default' },
  { label: 'Hover', state: 'hover' },
  { label: 'Active', state: 'active' },
  { label: 'Focus', state: 'focus' },
  { label: 'Disabled', state: 'disabled', disabled: true },
  { label: 'Loading', state: 'loading', isLoading: true },
];

const renderShowcase = (tone: 'light' | 'dark') => (
  <div
    className={tone === 'dark' ? 'dark' : undefined}
    style={{
      background: tone === 'dark' ? 'var(--color-theme-background)' : 'var(--color-theme-surface)',
      padding: '16px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }}
  >
    {variants.map((variant) => (
      <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontWeight: 700, color: 'var(--color-theme-text-primary)' }}>{variant}</div>
        {sizes.map((size) => (
          <div key={`${variant}-${size}`} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontWeight: 600, color: 'var(--color-theme-text-secondary)' }}>{size.toUpperCase()}</div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {stateConfigs.map(({ label, state, ...stateProps }) => (
                <Button
                  key={`${variant}-${size}-${label}`}
                  variant={variant}
                  size={size}
                  data-state={state}
                  {...stateProps}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const AllVariantsLight: Story = {
  name: 'All Variants (Light)',
  render: () => renderShowcase('light'),
};

export const AllVariantsDark: Story = {
  name: 'All Variants (Dark)',
  render: () => renderShowcase('dark'),
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button'
  }
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'md',
    children: 'Tertiary Button'
  }
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  )
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" isLoading>Loading</Button>
      <Button variant="secondary" isLoading>Loading</Button>
      <Button variant="tertiary" isLoading>Loading</Button>
      <Button variant="primary" size="sm" isLoading>Loading</Button>
      <Button variant="primary" size="lg" isLoading>Loading</Button>
    </div>
  )
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" iconLeft="←">Back</Button>
      <Button variant="primary" iconRight="→">Next</Button>
      <Button variant="secondary" iconLeft="✓">Save</Button>
    </div>
  )
};
