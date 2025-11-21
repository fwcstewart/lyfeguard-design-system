import React from 'react';
import { ProgressSummary } from './ProgressSummary';
import { vars } from '../../../globals.css';

export default {
  title: 'Components/DataVisuals/ProgressSummary',
  component: ProgressSummary,
};

const sampleItems = [
  { id: 'documents', label: 'Document uploads', progress: 72, helperText: 'Across all household members', tone: 'info' as const },
  { id: 'policy', label: 'Policy reviews', progress: 48, helperText: 'Needing attention this quarter', tone: 'warning' as const },
  { id: 'beneficiaries', label: 'Beneficiary confirmations', progress: 91, helperText: 'Completed for active plans', tone: 'success' as const },
  { id: 'risks', label: 'Open risk items', progress: 28, helperText: 'Escalated to advisors', tone: 'error' as const, valueLabel: '7 open' },
];

export const Default = () => (
  <div
    style={{
      maxWidth: '480px',
      background: vars.color.theme.background,
      padding: vars.spacing[6] as unknown as string,
    }}
  >
    <ProgressSummary heading="Portfolio readiness" items={sampleItems} />
  </div>
);

export const Interactive = () => (
  <ProgressSummary
    heading="Engagement overview"
    items={sampleItems}
    onItemClick={(id) => console.log('Clicked', id)}
  />
);
