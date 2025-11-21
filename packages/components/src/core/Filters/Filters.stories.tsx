import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Filters, FilterOption } from './Filters';
import { Container } from '../Layout/Container';
import { Stack } from '../Layout/Stack';

const options: FilterOption[] = [
  { id: 'all', label: 'All items', helperText: '124' },
  { id: 'active', label: 'Active', helperText: '78' },
  { id: 'pending', label: 'Pending', helperText: '18' },
  { id: 'archived', label: 'Archived', helperText: '28' },
  { id: 'flagged', label: 'Flagged', count: 4 },
];

const meta: Meta<typeof Filters> = {
  title: 'Components/Filters',
  component: Filters,
  args: {
    options,
    label: 'Filters',
    defaultSelected: ['all'],
  },
};

export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  render: (args) => (
    <div style={{ background: 'var(--color-theme-background)', padding: 'var(--spacing-8)' }}>
      <Container>
        <Stack gap="lg">
          <Stack gap="xs">
            <h2 style={{ margin: 0 }}>Find the right records</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Combine multiple filters to narrow the list. Pills expose helper text and counts for quick scanning.
            </p>
          </Stack>
          <Filters {...args} />
        </Stack>
      </Container>
    </div>
  ),
};

export const SingleSelect: Story = {
  args: {
    allowMultiple: false,
    defaultSelected: ['all'],
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      ...options,
      { id: 'locked', label: 'Locked', helperText: 'Admin only', disabled: true },
    ],
  },
};
