import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AreaChart, type AreaDefinition } from './AreaChart';
import { vars } from '../../../globals.css';

const meta: Meta<typeof AreaChart> = {
  title: 'DataVisuals/AreaChart',
  component: AreaChart,
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

const monthlyGrowth = [
  { month: 'Jan', users: 400, revenue: 240 },
  { month: 'Feb', users: 300, revenue: 139 },
  { month: 'Mar', users: 980, revenue: 200 },
  { month: 'Apr', users: 390, revenue: 278 },
  { month: 'May', users: 480, revenue: 189 },
  { month: 'Jun', users: 380, revenue: 239 },
];

const growthAreas: AreaDefinition[] = [
  { key: 'users', label: 'Users', colorSlot: 'success', fillOpacity: 0.6 },
  { key: 'revenue', label: 'Revenue', colorSlot: 'info', fillOpacity: 0.5 },
];

export const Default: Story = {
  args: {
    data: monthlyGrowth,
    xKey: 'month',
    areas: growthAreas,
    width: 600,
    height: 300,
  },
  render: (args) => (
    <div
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        borderRadius: vars.radius.md,
        display: 'inline-flex',
      }}
    >
      <AreaChart {...args} />
    </div>
  ),
};

const quarterlyStacked = [
  { quarter: 'Q1', product: 1200, service: 820, support: 320 },
  { quarter: 'Q2', product: 1500, service: 760, support: 400 },
  { quarter: 'Q3', product: 1750, service: 910, support: 450 },
  { quarter: 'Q4', product: 1600, service: 830, support: 380 },
];

export const Stacked: Story = {
  args: {
    data: quarterlyStacked,
    xKey: 'quarter',
    areas: [
      { key: 'product', label: 'Product', colorSlot: 'success', stackId: '1' },
      { key: 'service', label: 'Service', colorSlot: 'info', stackId: '1' },
      { key: 'support', label: 'Support', colorSlot: 'accent', stackId: '1' },
    ],
    width: 640,
    height: 360,
  },
  render: (args) => (
    <div
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        borderRadius: vars.radius.md,
        display: 'inline-flex',
      }}
    >
      <AreaChart {...args} />
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    data: monthlyGrowth,
    xKey: 'month',
    areas: growthAreas,
    height: 300,
    responsive: true,
  },
  render: (args) => (
    <div
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        borderRadius: vars.radius.md,
        width: '100%',
        maxWidth: 800,
      }}
    >
      <AreaChart {...args} />
    </div>
  ),
};

