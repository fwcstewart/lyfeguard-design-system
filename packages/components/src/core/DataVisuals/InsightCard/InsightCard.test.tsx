import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { InsightCard } from './InsightCard';
import * as styles from './InsightCard.css';

describe('InsightCard', () => {
  it('renders the title, value and helper content', () => {
    render(
      <InsightCard
        title="Net revenue"
        value="$128,450"
        secondaryValue="▲ 12.4%"
        helperText="Includes renewals"
        meta="Updated just now"
      />,
    );

    expect(screen.getByText('Net revenue')).toBeInTheDocument();
    expect(screen.getByText('$128,450')).toBeInTheDocument();
    expect(screen.getByText('▲ 12.4%')).toBeInTheDocument();
    expect(screen.getByText('Includes renewals')).toBeInTheDocument();
    expect(screen.getByText('Updated just now')).toBeInTheDocument();
  });

  it('shows trend information with tone styling', () => {
    render(
      <InsightCard
        title="Churn"
        value="2.1%"
        trend={{ value: '-0.4%', label: 'vs last month', tone: 'negative' }}
      />,
    );

    expect(screen.getByText('-0.4%')).toBeInTheDocument();
    expect(screen.getByText('vs last month')).toBeInTheDocument();
    expect(screen.getByText('-0.4%').parentElement).toHaveClass(styles.trendTone.negative);
  });

  it('renders a progress indicator with clamped values', () => {
    render(<InsightCard title="Onboarding" value="86%" progress={120} />);

    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '100');
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});
