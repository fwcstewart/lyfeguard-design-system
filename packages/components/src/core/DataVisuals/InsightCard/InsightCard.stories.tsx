import React from 'react';
import { InsightCard } from './InsightCard';
import { vars } from '../../../globals.css';

export default {
  title: 'Components/DataVisuals/InsightCard',
  component: InsightCard,
};

export const Dashboard = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: vars.spacing[4] as unknown as string,
      background: vars.color.theme.background,
      padding: vars.spacing[6] as unknown as string,
    }}
  >
    <InsightCard
      title="Monthly revenue"
      value="$128,450"
      secondaryValue="▲ 12.4%"
      description="Across all active plans"
      trend={{ value: '+$14,102', label: 'vs last month', tone: 'positive' }}
      progress={68}
      helperText="Renewals trending ahead of forecast"
      meta="Updated 3 minutes ago"
    />
    <InsightCard
      title="Churn rate"
      value="2.1%"
      secondaryValue="▼ 0.4%"
      description="Customer churn over the last 30 days"
      trend={{ value: '-34 accounts', label: 'vs previous period', tone: 'negative' }}
      progress={32}
      progressLabel="Recovery goal"
      helperText="Adding more proactive outreach"
      meta="QA monitored"
    />
    <InsightCard
      title="Onboarding completion"
      value="86%"
      description="Users completing all checklist items"
      trend={{ value: '+6.3 pts', label: 'since last week', tone: 'positive' }}
      progress={86}
      progressLabel="Target"
      helperText="Average time to complete is 3.2 days"
      meta="Tracking 1,430 users"
      icon={<span role="img" aria-label="spark">✨</span>}
    />
  </div>
);

export const WithActions = () => (
  <InsightCard
    title="Active policies"
    value="4,892"
    description="Total across personal and corporate"
    trend={{ value: '+128', label: 'week over week', tone: 'neutral' }}
    progress={54}
    actions={
      <button
        style={{
          background: 'transparent',
          border: `1px solid ${vars.color.theme.border}`,
          borderRadius: vars.radius.round,
          padding: `${vars.spacing[1]} ${vars.spacing[3]}` as unknown as string,
          cursor: 'pointer',
        }}
      >
        Export
      </button>
    }
    helperText="Includes pending approvals"
    meta="Synced 10:24"
  />
);
