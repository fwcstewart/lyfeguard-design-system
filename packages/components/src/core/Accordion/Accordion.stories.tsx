import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion, AccordionItem } from './Accordion';
import { Container } from '../Layout/Container';
import { Stack } from '../Layout/Stack';

const sampleItems: AccordionItem[] = [
  {
    id: 'security',
    title: 'Security controls',
    description: 'Encryption and access management',
    content:
      'We encrypt data at rest and in transit, audit privileged access, and provide role-based permissions to reduce risk.',
  },
  {
    id: 'backups',
    title: 'Backup policy',
    description: 'Redundancy and retention windows',
    content:
      'Daily snapshots are retained for 35 days with geo-redundant storage. Exports are available on request.',
  },
  {
    id: 'support',
    title: 'Support response',
    description: 'SLA and escalation paths',
    content: 'Critical issues receive a 1-hour acknowledgement with proactive updates until resolved.',
  },
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    items: sampleItems,
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <div style={{ background: 'var(--color-theme-background)', padding: 'var(--spacing-8)' }}>
      <Container>
        <Stack gap="lg">
          <Stack gap="xs">
            <h2 style={{ margin: 0 }}>Policy details</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Each section is collapsible so users can scan and dive deeper without losing their place.
            </p>
          </Stack>
          <Accordion {...args} />
        </Stack>
      </Container>
    </div>
  ),
};

export const MultipleOpen: Story = {
  args: {
    items: sampleItems,
    multiple: true,
    defaultOpenItems: ['security', 'backups'],
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      ...sampleItems,
      {
        id: 'compliance',
        title: 'Compliance reports',
        description: 'Coming soon',
        content: 'Compliance reports can be requested from the Lyfeguard team.',
        disabled: true,
      },
    ],
  },
};
