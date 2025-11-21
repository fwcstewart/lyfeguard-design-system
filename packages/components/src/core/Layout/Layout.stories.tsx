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
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="xl">
          <Stack
            gap="md"
            padding={{ base: 'lg', md: 'xl' }}
            style={{
              background: 'var(--color-theme-surface)',
              borderRadius: vars.radius.lg,
              border: `1px solid var(--color-theme-border)`,
              boxShadow: vars.shadow.sm,
            }}
          >
            <Stack gap="xs">
              <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Layout primitives</h2>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                Use Container for readable line lengths, Stack for vertical rhythm, and Grid for responsive distribution.
              </p>
            </Stack>
            <Stack direction="row" gap="sm" wrap="wrap">
              <Tile title="Responsive gaps" body="Gap, margin and padding accept breakpoint-aware tokens." />
              <Tile title="Theme-aware surfaces" body="Surface backgrounds separate content from the page tone." />
              <Tile title="Dividers" body="Use the dividers prop for subtle separation without extra markup." />
            </Stack>
          </Stack>

          <Grid columns={12} gap={{ base: 'lg', xl: 'xl' }}>
            <GridItem span={{ base: 12, lg: 7 }}>
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
            <GridItem span={{ base: 12, lg: 5 }}>
              <Stack
                gap="md"
                padding="lg"
                dividers
                style={{
                  background: 'var(--color-theme-surface)',
                  borderRadius: vars.radius.md,
                  border: `1px solid var(--color-theme-border)`,
                  boxShadow: vars.shadow.sm,
                }}
              >
                <h4 style={{ margin: 0 }}>Sidebar widgets</h4>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  Stack dividers inherit theme border tokens for subtle separation.
                </p>
                <Tile title="Reminders" body="Use spacing tokens to align metadata." />
                <Tile title="Shortcuts" body="Complementary actions can sit in stacked surface blocks." />
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </Container>
    </div>
  ),
};
