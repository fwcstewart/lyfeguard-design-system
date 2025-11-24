import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { vars } from '../../globals.css';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Sidebar } from '../Navigation/Sidebar';
import { Flex } from './Flex';
import { SidebarLayout } from './SidebarLayout';
import { Split } from './Split';
import { Stack } from './Stack';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Phase 2 Components',
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const FlexExample: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Stack gap="xl">
        <Stack gap="md">
          <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Flex Examples</h2>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            Flex provides explicit control over flexbox properties including grow, shrink, and basis.
          </p>
        </Stack>

        <Card>
          <Stack gap="md">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Flex with Grow/Shrink</h3>
            <Flex gap="md" wrap="wrap">
              <Flex
                direction="column"
                gap="sm"
                padding="md"
                grow={1}
                shrink={1}
                basis="300px"
                style={{
                  background: 'var(--color-theme-surface)',
                  borderRadius: vars.radius.md,
                  border: `1px solid var(--color-theme-border)`,
                }}
              >
                <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Flexible Item 1</h4>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  This item can grow and shrink with flex properties.
                </p>
              </Flex>
              <Flex
                direction="column"
                gap="sm"
                padding="md"
                grow={2}
                shrink={1}
                basis="300px"
                style={{
                  background: 'var(--color-theme-surface)',
                  borderRadius: vars.radius.md,
                  border: `1px solid var(--color-theme-border)`,
                }}
              >
                <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Flexible Item 2</h4>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  This item grows twice as much as the first item.
                </p>
              </Flex>
            </Flex>
          </Stack>
        </Card>

        <Card>
          <Stack gap="md">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Flex Alignment</h3>
            <Flex direction="row" gap="md" align="center" justify="space-between" wrap="wrap">
              <Badge>Left</Badge>
              <Badge>Center</Badge>
              <Badge>Right</Badge>
            </Flex>
            <Flex direction="column" gap="sm" align="stretch">
              <div
                style={{
                  padding: vars.spacing[3],
                  background: 'var(--color-theme-surface)',
                  borderRadius: vars.radius.sm,
                }}
              >
                Stretched item
              </div>
              <div
                style={{
                  padding: vars.spacing[3],
                  background: 'var(--color-theme-surface)',
                  borderRadius: vars.radius.sm,
                }}
              >
                Another stretched item
              </div>
            </Flex>
          </Stack>
        </Card>

        <Card>
          <Stack gap="md">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Flex with Wrapping</h3>
            <Flex
              direction="row"
              gap={{ base: 'sm', md: 'lg' }}
              align="center"
              justify="space-around"
              wrap="wrap"
            >
              <Button variant="primary">Button 1</Button>
              <Button variant="secondary">Button 2</Button>
              <Button variant="tertiary">Button 3</Button>
            </Flex>
          </Stack>
        </Card>
      </Stack>
    </div>
  ),
};

export const SplitExample: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Stack gap="xl">
        <Stack gap="md">
          <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Split Examples</h2>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            Split divides space between two content areas with configurable proportions and responsive collapse.
          </p>
        </Stack>

        <Card>
          <Stack gap="md">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Equal Split (50/50)</h3>
            <Split
              start={
                <div
                  style={{
                    padding: vars.spacing[4],
                    background: 'var(--color-brand-100)',
                    borderRadius: vars.radius.md,
                    color: 'var(--color-brand-700)',
                  }}
                >
                  Start Section
                </div>
              }
              end={
                <div
                  style={{
                    padding: vars.spacing[4],
                    background: 'var(--color-accent-100)',
                    borderRadius: vars.radius.md,
                    color: 'var(--color-accent-700)',
                  }}
                >
                  End Section
                </div>
              }
              gap="md"
            />
          </Stack>
        </Card>

        <Card>
          <Stack gap="md">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Unequal Split (30/70)</h3>
            <Split
              start={
                <div
                  style={{
                    padding: vars.spacing[4],
                    background: 'var(--color-theme-surface)',
                    borderRadius: vars.radius.md,
                    border: `1px solid var(--color-theme-border)`,
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Sidebar</h4>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>30% width</p>
                </div>
              }
              end={
                <div
                  style={{
                    padding: vars.spacing[4],
                    background: 'var(--color-theme-surface)',
                    borderRadius: vars.radius.md,
                    border: `1px solid var(--color-theme-border)`,
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Main Content</h4>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>70% width</p>
                </div>
              }
              fraction={0.3}
              gap="lg"
            />
          </Stack>
        </Card>

        <Card>
          <Stack gap="md">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Vertical Split</h3>
            <Split
              direction="column"
              start={
                <div
                  style={{
                    padding: vars.spacing[4],
                    background: 'var(--color-success-100)',
                    borderRadius: vars.radius.md,
                    color: 'var(--color-success-700)',
                  }}
                >
                  Top Section
                </div>
              }
              end={
                <div
                  style={{
                    padding: vars.spacing[4],
                    background: 'var(--color-warning-100)',
                    borderRadius: vars.radius.md,
                    color: 'var(--color-warning-700)',
                  }}
                >
                  Bottom Section
                </div>
              }
              gap="md"
            />
          </Stack>
        </Card>

        <Card>
          <Stack gap="md">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Responsive Split (Collapses at MD)</h3>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Resize the viewport to see the split stack vertically on smaller screens.
            </p>
            <Split
              start={
                <div
                  style={{
                    padding: vars.spacing[4],
                    background: 'var(--color-theme-surface)',
                    borderRadius: vars.radius.md,
                    border: `1px solid var(--color-theme-border)`,
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Left Content</h4>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    This section will stack above on mobile.
                  </p>
                </div>
              }
              end={
                <div
                  style={{
                    padding: vars.spacing[4],
                    background: 'var(--color-theme-surface)',
                    borderRadius: vars.radius.md,
                    border: `1px solid var(--color-theme-border)`,
                  }}
                >
                  <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Right Content</h4>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    This section will stack below on mobile.
                  </p>
                </div>
              }
              gap="lg"
              collapseAt="md"
            />
          </Stack>
        </Card>
      </Stack>
    </div>
  ),
};

export const SidebarLayoutExample: Story = {
  render: () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const sidebarItems = [
      { label: 'Dashboard', icon: '📊', href: '#' },
      { label: 'Documents', icon: '📄', href: '#' },
      { label: 'Contacts', icon: '👥', href: '#' },
      { label: 'Settings', icon: '⚙️', href: '#' },
    ];

    return (
      <div style={{ background: 'var(--color-theme-background)', minHeight: '100vh' }}>
        <Stack gap="xl" padding="lg">
          <Stack gap="md">
            <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>SidebarLayout Examples</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              SidebarLayout provides a two-column layout with sidebar and main content, with responsive collapse
              support.
            </p>
          </Stack>

          <Card>
            <Stack gap="md">
              <Flex justify="space-between" align="center">
                <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Basic SidebarLayout</h3>
                <Button variant="secondary" onClick={() => setIsCollapsed(!isCollapsed)}>
                  {isCollapsed ? 'Expand' : 'Collapse'} Sidebar
                </Button>
              </Flex>
              <div
                style={{
                  border: `1px solid var(--color-theme-border)`,
                  borderRadius: vars.radius.md,
                  overflow: 'hidden',
                  minHeight: '400px',
                }}
              >
                <SidebarLayout
                  sidebar={
                    <div
                      style={{
                        padding: vars.spacing[4],
                        background: 'var(--color-theme-surface)',
                        height: '100%',
                      }}
                    >
                      <Stack gap="sm">
                        {sidebarItems.map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: vars.spacing[3],
                              borderRadius: vars.radius.sm,
                              background: 'var(--color-theme-background)',
                              cursor: 'pointer',
                            }}
                          >
                            <Flex gap="sm" align="center">
                              <span>{item.icon}</span>
                              {!isCollapsed && <span>{item.label}</span>}
                            </Flex>
                          </div>
                        ))}
                      </Stack>
                    </div>
                  }
                  sidebarWidth={isCollapsed ? '60px' : '250px'}
                  gap="none"
                  contentPadding="lg"
                  collapsible
                  isCollapsed={isCollapsed}
                >
                  <Stack gap="md">
                    <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Main Content Area</h4>
                    <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                      This is the main content area. The sidebar can be collapsed to give more space to the content.
                    </p>
                    <Card>
                      <Stack gap="sm">
                        <h5 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Content Card</h5>
                        <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                          Content cards and other components work seamlessly within the SidebarLayout.
                        </p>
                      </Stack>
                    </Card>
                  </Stack>
                </SidebarLayout>
              </div>
            </Stack>
          </Card>

          <Card>
            <Stack gap="md">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Responsive SidebarLayout</h3>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                The sidebar automatically stacks above the content on smaller screens when collapseAt is set.
              </p>
              <div
                style={{
                  border: `1px solid var(--color-theme-border)`,
                  borderRadius: vars.radius.md,
                  overflow: 'hidden',
                  minHeight: '400px',
                }}
              >
                <SidebarLayout
                  sidebar={
                    <div
                      style={{
                        padding: vars.spacing[4],
                        background: 'var(--color-theme-surface)',
                        height: '100%',
                      }}
                    >
                      <Stack gap="sm">
                        {sidebarItems.map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: vars.spacing[3],
                              borderRadius: vars.radius.sm,
                              background: 'var(--color-theme-background)',
                            }}
                          >
                            <Flex gap="sm" align="center">
                              <span>{item.icon}</span>
                              <span>{item.label}</span>
                            </Flex>
                          </div>
                        ))}
                      </Stack>
                    </div>
                  }
                  sidebarWidth="250px"
                  gap="lg"
                  collapseAt="md"
                  contentPadding="lg"
                >
                  <Stack gap="md">
                    <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Responsive Content</h4>
                    <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                      Resize the viewport to see the sidebar stack above the content on screens smaller than the md
                      breakpoint.
                    </p>
                  </Stack>
                </SidebarLayout>
              </div>
            </Stack>
          </Card>
        </Stack>
      </div>
    );
  },
};

export const CombinedPhase2Example: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Stack gap="2xl">
        <Stack gap="md">
          <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Combined Phase 2 Layout Example</h1>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            All Phase 2 layout components work together to create complex, responsive layouts.
          </p>
        </Stack>

        <Split
          start={
            <Card>
              <Stack gap="md">
                <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Left Panel</h3>
                <Flex direction="column" gap="sm">
                  <Badge>Flex</Badge>
                  <Badge>Split</Badge>
                  <Badge>SidebarLayout</Badge>
                </Flex>
              </Stack>
            </Card>
          }
          end={
            <Card>
              <Stack gap="md">
                <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Right Panel</h3>
                <Flex direction="row" gap="md" wrap="wrap" justify="space-between">
                  <Button variant="primary">Action 1</Button>
                  <Button variant="secondary">Action 2</Button>
                  <Button variant="tertiary">Action 3</Button>
                </Flex>
              </Stack>
            </Card>
          }
          fraction={0.4}
          gap="lg"
          collapseAt="md"
        />
      </Stack>
    </div>
  ),
};

