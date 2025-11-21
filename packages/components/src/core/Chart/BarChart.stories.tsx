import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { BarChart, type BarDefinition } from './BarChart';
import { vars } from '../../globals.css';

const meta: Meta<typeof BarChart> = {
  title: 'Core/Charts/BarChart',
  component: BarChart,
};

export default meta;

type Story = StoryObj<typeof BarChart>;

const monthlyResults = [
  { month: 'Jan', expenses: 400, revenue: 240 },
  { month: 'Feb', expenses: 300, revenue: 139 },
  { month: 'Mar', expenses: 200, revenue: 980 },
  { month: 'Apr', expenses: 278, revenue: 390 },
  { month: 'May', expenses: 189, revenue: 480 },
  { month: 'Jun', expenses: 239, revenue: 380 },
];

const stackedBars: BarDefinition[] = [
  { key: 'expenses', label: 'Expenses', colorSlot: 'warning' },
  { key: 'revenue', label: 'Revenue', colorSlot: 'success' },
];

export const LightMode: Story = {
  args: {
    data: monthlyResults,
    xKey: 'month',
    bars: stackedBars,
    width: 560,
    height: 320,
  },
};

export const DarkMode: Story = {
  args: LightMode.args,
  render: (args) => (
    <div
      className="dark"
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        borderRadius: vars.radius.md,
        display: 'inline-flex',
      }}
    >
      <BarChart {...args} />
    </div>
  ),
};

const quarterlyPerformance = [
  { quarter: 'Q1', revenue: 1200, expenses: 820, investment: 320 },
  { quarter: 'Q2', revenue: 1500, expenses: 760, investment: 400 },
  { quarter: 'Q3', revenue: 1750, expenses: 910, investment: 450 },
  { quarter: 'Q4', revenue: 1600, expenses: 830, investment: 380 },
];

export const CustomPalette: Story = {
  args: {
    data: quarterlyPerformance,
    xKey: 'quarter',
    bars: [
      { key: 'revenue', label: 'Revenue', colorSlot: 'info' },
      { key: 'expenses', label: 'Expenses', colorSlot: 'critical' },
      { key: 'investment', label: 'Investment', colorSlot: 'accent' },
    ],
    width: 640,
    height: 360,
  },
};
