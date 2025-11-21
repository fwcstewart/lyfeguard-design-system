import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PieChart } from './PieChart';
import { vars } from '../../../globals.css';

const meta: Meta<typeof PieChart> = {
  title: 'DataVisuals/PieChart',
  component: PieChart,
};

export default meta;
type Story = StoryObj<typeof PieChart>;

const budgetData = [
  { name: 'Operations', value: 400 },
  { name: 'Marketing', value: 300 },
  { name: 'Development', value: 200 },
  { name: 'Support', value: 100 },
];

export const Default: Story = {
  args: {
    data: budgetData,
    width: 400,
    height: 400,
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
      <PieChart {...args} />
    </div>
  ),
};

const revenueBreakdown = [
  { name: 'Product Sales', value: 4500 },
  { name: 'Services', value: 3200 },
  { name: 'Subscriptions', value: 2800 },
  { name: 'Other', value: 500 },
];

export const Donut: Story = {
  args: {
    data: revenueBreakdown,
    width: 400,
    height: 400,
    innerRadius: 80,
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
      <PieChart {...args} />
    </div>
  ),
};

export const WithColorSlots: Story = {
  args: {
    data: [
      { name: 'Success', value: 400, colorSlot: 'success' },
      { name: 'Info', value: 300, colorSlot: 'info' },
      { name: 'Warning', value: 200, colorSlot: 'warning' },
      { name: 'Critical', value: 100, colorSlot: 'critical' },
    ],
    width: 400,
    height: 400,
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
      <PieChart {...args} />
    </div>
  ),
};

