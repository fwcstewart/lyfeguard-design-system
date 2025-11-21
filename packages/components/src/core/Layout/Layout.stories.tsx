import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { vars } from '../../globals.css';
import { Card } from '../Card/Card';
import { Grid } from './Grid';
import { GridItem } from './GridItem';
import { Stack } from './Stack';
import { Container } from './Container';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Layout Primitives',
  component: Stack,
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Tile: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <Stack
    gap="sm"
    padding="lg"
    style={{
      background: 'var(--color-theme-surface)',
      border: `1px solid var(--color-theme-border)`,
      borderRadius: vars.radius.md,
    }}
  >
    <h4 style={{ margin: 0 }}>{title}</h4>
    <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>{body}</p>
  </Stack>
);

export const Default: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[8] }}>
      <Container>
        <Stack gap="xl" padding="xl">
          <Stack gap="xs" dividers>
            <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Layout primitives</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Stack and Grid use spacing tokens for gaps, margins and padding. Dividers use theme-aware border colours.
            </p>
          </Stack>
          <Grid columns={12} gap={{ base: 'md', lg: 'xl' }}>
            <GridItem span={8}>
              <Card header="Content grouping">
                <Stack gap="sm">
                  <p style={{ margin: 0 }}>
                    Combine Stack and Card to group related content with consistent spacing. Adjust gaps responsively using
                    semantic tokens.
                  </p>
                  <Stack direction="row" gap="sm" wrap="wrap">
                    <Tile title="Profile" body="Compact summary panels aligned with spacing tokens." />
                    <Tile title="Tasks" body="Consistent gutters keep information readable." />
                  </Stack>
                </Stack>
              </Card>
            </GridItem>
            <GridItem span={4}>
              <Stack gap="md" padding="lg" dividers style={{ background: 'var(--color-theme-surface)', borderRadius: vars.radius.md }}>
                <h4 style={{ margin: 0 }}>Sidebar widgets</h4>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  Stack dividers inherit theme border tokens for subtle separation.
                </p>
                <Tile title="Reminders" body="Use spacing tokens to align metadata." />
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </Container>
    </div>
  ),
};
