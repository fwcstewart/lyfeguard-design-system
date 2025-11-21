import React from 'react';
import { Tabs, TabItem } from './Tabs';

export default {
  title: 'Core/Tabs',
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

export const Default = () => <Tabs tabs={exampleTabs} />;