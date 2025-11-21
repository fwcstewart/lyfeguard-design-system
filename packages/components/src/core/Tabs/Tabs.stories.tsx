import React from 'react';
import { Tabs, TabItem } from './Tabs';
import { vars } from '../../globals.css';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const exampleTabs: TabItem[] = [
  {
    label: 'First',
    content: <p>Content for the first tab.</p>,
  },
  {
    label: 'Second',
    content: <p>Content for the second tab.</p>,
  },
  {
    label: 'Third',
    content: <p>Content for the third tab.</p>,
  },
];

const darkModeTabs: TabItem[] = [
  {
    label: 'Profile',
    content: <p>Account preferences and personal information.</p>,
  },
  {
    label: 'Billing',
    content: <p>Billing details are currently unavailable.</p>,
    isDisabled: true,
  },
  {
    label: 'Security',
    content: <p>Enable MFA and review device sessions.</p>,
  },
];

export const Default = () => (
  <div
    style={{
      background: vars.color.theme.background,
      padding: vars.spacing[6] as unknown as string,
      borderRadius: vars.radius.lg,
    }}
  >
    <Tabs tabs={exampleTabs} />
  </div>
);

export const WithDisabled = () => (
  <div
    style={{
      background: vars.color.theme.background,
      padding: vars.spacing[6] as unknown as string,
      borderRadius: vars.radius.lg,
    }}
  >
    <Tabs tabs={darkModeTabs} />
  </div>
);