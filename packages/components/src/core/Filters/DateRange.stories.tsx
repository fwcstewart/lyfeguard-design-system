import React from 'react';
import { DateRange } from './DateRange';
import { vars } from '../../globals.css';

export default {
  title: 'Components/Filters/DateRange',
  component: DateRange,
};

const presets = [
  { label: 'Last 7 days', startDate: '2024-06-10', endDate: '2024-06-17' },
  { label: 'Last 30 days', startDate: '2024-05-19', endDate: '2024-06-17' },
  { label: 'Quarter to date', startDate: '2024-04-01', endDate: '2024-06-30' },
];

export const Default = () => (
  <div
    style={{
      maxWidth: '600px',
      background: vars.color.theme.background,
      padding: vars.spacing[6] as unknown as string,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <DateRange
      label="Date range"
      helperText="Use presets for common analysis windows"
      presets={presets}
      defaultValue={{ startDate: '2024-06-01', endDate: '2024-06-17' }}
    />
  </div>
);

export const Controlled = () => {
  const [range, setRange] = React.useState({ startDate: '2024-05-01', endDate: '2024-05-31' });

  return (
    <DateRange
      label="Billing period"
      value={range}
      onChange={setRange}
      presets={presets}
      helperText={`Currently viewing ${range.startDate} to ${range.endDate}`}
    />
  );
};
