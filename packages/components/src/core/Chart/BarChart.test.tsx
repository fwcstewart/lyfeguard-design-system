import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { BarChart, DATA_COLOR_SLOTS } from './BarChart';
import { vars } from '../../globals.css';

describe('BarChart', () => {
  const data = [
    { label: 'One', expenses: 120, revenue: 240, investment: 60 },
    { label: 'Two', expenses: 90, revenue: 180, investment: 80 },
  ];

  it('uses semantic colour slots for bar fills', async () => {
    const { container } = render(
      <BarChart
        data={data}
        xKey="label"
        bars={[
          { key: 'expenses', label: 'Expenses', colorSlot: 'critical' },
          { key: 'revenue', label: 'Revenue', colorSlot: 'success' },
          { key: 'investment', label: 'Investment', colorSlot: 'accent' },
        ]}
        width={480}
        height={280}
      />,
    );

    const renderedBars = () => container.querySelectorAll('.recharts-bar-rectangle path');

    await waitFor(() => expect(renderedBars().length).toBeGreaterThan(0));

    const fillValues = Array.from(renderedBars()).map((bar) => bar.getAttribute('fill'));

    expect(fillValues).toContain(DATA_COLOR_SLOTS.critical);
    expect(fillValues).toContain(DATA_COLOR_SLOTS.success);
    expect(fillValues).toContain(DATA_COLOR_SLOTS.accent);
  });

  it('applies themed grid, axis and legend styling in dark mode', async () => {
    const { container } = render(
      <div className="dark">
        <BarChart
          data={data}
          xKey="label"
          bars={[
            { key: 'expenses', label: 'Expenses' },
            { key: 'revenue', label: 'Revenue' },
          ]}
          width={480}
          height={280}
        />
      </div>,
    );

    await waitFor(() => {
      expect(container.querySelectorAll('.recharts-cartesian-grid line').length).toBeGreaterThan(0);
      expect(container.querySelectorAll('.recharts-cartesian-axis-tick text').length).toBeGreaterThan(0);
    });

    const gridLines = container.querySelectorAll('.recharts-cartesian-grid line');
    gridLines.forEach((line) => {
      expect(line).toHaveAttribute('stroke', vars.color.theme.border);
    });

    const axisTicks = container.querySelectorAll('.recharts-cartesian-axis-tick text');
    axisTicks.forEach((tick) => {
      expect(tick).toHaveAttribute('fill', vars.color.theme.text.secondary);
      expect(tick).toHaveAttribute('font-family', vars.font.sans);
    });

    const legendItems = container.querySelectorAll('.recharts-legend-item-text');
    expect(legendItems.length).toBeGreaterThan(0);
    legendItems.forEach((legendItem) => {
      const label = legendItem.querySelector('span') ?? legendItem;
      expect(label).toHaveStyle({ color: vars.color.theme.text.secondary, fontFamily: vars.font.sans });
    });
  });
});
