import React from 'react';
import { BarChart } from './BarChart';

export default {
  title: 'Core/Charts/BarChart',
  component: BarChart,
};

const data = [
  { month: 'Jan', expenses: 400, revenue: 240 },
  { month: 'Feb', expenses: 300, revenue: 139 },
  { month: 'Mar', expenses: 200, revenue: 980 },
  { month: 'Apr', expenses: 278, revenue: 390 },
  { month: 'May', expenses: 189, revenue: 480 },
  { month: 'Jun', expenses: 239, revenue: 380 },
];

export const Example = () => (
  <BarChart
    data={data}
    xKey="month"
    bars={[
      { key: 'expenses', label: 'Expenses' },
      { key: 'revenue', label: 'Revenue' },
    ]}
    width={500}
    height={300}
  />
);