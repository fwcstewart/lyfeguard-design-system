import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LineChart, type LineDefinition } from './LineChart';
import { vars } from '../../../globals.css';

const meta: Meta<typeof LineChart> = {
  title: 'DataVisuals/LineChart',
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof LineChart>;

const monthlyRevenue = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 9800, expenses: 2000 },
  { month: 'Apr', revenue: 3900, expenses: 2780 },
  { month: 'May', revenue: 4800, expenses: 1890 },
  { month: 'Jun', revenue: 3800, expenses: 2390 },
];

const revenueLines: LineDefinition[] = [
  { key: 'revenue', label: 'Revenue', colorSlot: 'success', showDots: true },
  { key: 'expenses', label: 'Expenses', colorSlot: 'warning', showDots: true },
];

export const Default: Story = {
  args: {
    data: monthlyRevenue,
    xKey: 'month',
    lines: revenueLines,
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
      <LineChart {...args} />
    </div>
  ),
};

const quarterlyTrends = [
  { quarter: 'Q1', sales: 1200, marketing: 820, support: 320 },
  { quarter: 'Q2', sales: 1500, marketing: 760, support: 400 },
  { quarter: 'Q3', sales: 1750, marketing: 910, support: 450 },
  { quarter: 'Q4', sales: 1600, marketing: 830, support: 380 },
];

export const MultipleLines: Story = {
  args: {
    data: quarterlyTrends,
    xKey: 'quarter',
    lines: [
      { key: 'sales', label: 'Sales', colorSlot: 'success', strokeWidth: 3 },
      { key: 'marketing', label: 'Marketing', colorSlot: 'info', strokeWidth: 2 },
      { key: 'support', label: 'Support', colorSlot: 'accent', strokeWidth: 2 },
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
      <LineChart {...args} />
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    data: monthlyRevenue,
    xKey: 'month',
    lines: revenueLines,
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
      <LineChart {...args} />
    </div>
  ),
};

