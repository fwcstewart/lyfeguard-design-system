import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { vars } from '../../globals.css';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Sidebar, SidebarItem } from '../Navigation/Sidebar';
import { TopNav, NavLinkItem } from '../Navigation/TopNav';
import { AspectRatio } from './AspectRatio';
import { Center } from './Center';
import { Cluster } from './Cluster';
import { Container } from './Container';
import { Flex } from './Flex';
import { Grid } from './Grid';
import { GridItem } from './GridItem';
import { PageLayout } from './PageLayout';
import { Section } from './Section';
import { SidebarLayout } from './SidebarLayout';
import { Split } from './Split';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Guide',
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

export const Foundation: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="xl">
          <Stack gap="md">
            <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Foundation Components</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Container, Stack, Grid, and GridItem form the foundation of the layout system.
            </p>
          </Stack>

          <Grid columns={12} gap="lg">
            <GridItem span={{ base: 12, lg: 7 }}>
              <Card header="Container & Stack">
                <Stack gap="sm">
                  <p style={{ margin: 0 }}>
                    Container centers content and constrains width. Stack provides vertical or horizontal spacing with
                    consistent gaps.
                  </p>
                  <Stack direction="row" gap="sm" wrap="wrap">
                    <Tile title="Responsive" body="All spacing adapts at breakpoints." />
                    <Tile title="Token-based" body="Uses design system spacing tokens." />
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
                }}
              >
                <h4 style={{ margin: 0 }}>Stack with Dividers</h4>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  Dividers provide visual separation between items.
                </p>
                <Tile title="Item" body="Stack items with consistent spacing." />
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </Container>
    </div>
  ),
};

export const CompositionHelpers: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="xl">
          <Stack gap="md">
            <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Composition Helpers</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Section, AspectRatio, Center, and Cluster help compose layouts quickly.
            </p>
          </Stack>

          <Section spacing="lg" divider>
            <Stack gap="md">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Section</h3>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                Sections provide semantic grouping with consistent spacing and optional dividers.
              </p>
            </Stack>
          </Section>

          <Grid columns={12} gap="lg">
            <GridItem span={{ base: 12, md: 6 }}>
              <Card>
                <Stack gap="sm">
                  <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>AspectRatio</h4>
                  <AspectRatio ratio={16 / 9} fit="cover">
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, var(--color-brand-500), var(--color-brand-700))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      16:9
                    </div>
                  </AspectRatio>
                </Stack>
              </Card>
            </GridItem>
            <GridItem span={{ base: 12, md: 6 }}>
              <Card>
                <Stack gap="sm">
                  <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Center</h4>
                  <Center maxWidth="300px" padding="md">
                    <Stack gap="sm" style={{ textAlign: 'center' }}>
                      <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                        Centered content with max-width constraint.
                      </p>
                      <Cluster gap="xs" justify="center">
                        <Badge>Centered</Badge>
                        <Badge>Content</Badge>
                      </Cluster>
                    </Stack>
                  </Center>
                </Stack>
              </Card>
            </GridItem>
          </Grid>

          <Card>
            <Stack gap="md">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Cluster</h3>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                Cluster groups items horizontally with automatic wrapping.
              </p>
              <Cluster gap="sm" wrap>
                <Badge>Tag 1</Badge>
                <Badge>Tag 2</Badge>
                <Badge>Tag 3</Badge>
                <Badge>Tag 4</Badge>
                <Badge>Tag 5</Badge>
                <Button variant="secondary" size="sm">
                  Action
                </Button>
              </Cluster>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </div>
  ),
};

export const AdvancedLayouts: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="xl">
          <Stack gap="md">
            <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Advanced Layouts</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Flex, Split, and SidebarLayout for complex layout patterns.
            </p>
          </Stack>

          <Card>
            <Stack gap="md">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Flex</h3>
              <Flex gap="md" wrap="wrap" justify="space-between" align="center">
                <Button variant="primary">Button 1</Button>
                <Button variant="secondary">Button 2</Button>
                <Cluster gap="xs">
                  <Badge>Flex</Badge>
                  <Badge>Layout</Badge>
                </Cluster>
              </Flex>
            </Stack>
          </Card>

          <Card>
            <Stack gap="md">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Split</h3>
              <Split
                start={
                  <div
                    style={{
                      padding: 'var(--spacing-4)',
                      background: 'var(--color-brand-100)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-brand-700)',
                    }}
                  >
                    Left Section (30%)
                  </div>
                }
                end={
                  <div
                    style={{
                      padding: 'var(--spacing-4)',
                      background: 'var(--color-accent-100)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-accent-700)',
                    }}
                  >
                    Right Section (70%)
                  </div>
                }
                fraction={0.3}
                gap="md"
                collapseAt="md"
              />
            </Stack>
          </Card>
        </Stack>
      </Container>
    </div>
  ),
};

export const PageStructure: Story = {
  render: () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const sidebarItems: SidebarItem[] = [
      { label: 'Dashboard', icon: '📊', href: '#' },
      { label: 'Documents', icon: '📄', href: '#' },
      { label: 'Contacts', icon: '👥', href: '#' },
      { label: 'Settings', icon: '⚙️', href: '#' },
    ];

    const navLinks: NavLinkItem[] = [
      { label: 'Home', href: '#', isActive: true },
      { label: 'Components', href: '#' },
    ];

    return (
      <PageLayout
        header={
          <TopNav
            brandName="Lyfeguard"
            links={navLinks}
            actions={
              <Button variant="secondary" size="sm" onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? '☰' : '✕'}
              </Button>
            }
          />
        }
        sidebar={<Sidebar items={sidebarItems} />}
        collapsible
        isCollapsed={isCollapsed}
        collapseAt="md"
        contentPadding="lg"
        gap="none"
        fullHeight
        stickyHeader
      >
        <Container>
          <Stack gap="xl" padding={{ base: 'lg', md: 'xl' }}>
            <Stack gap="md">
              <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>PageLayout</h1>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                PageLayout provides a complete page structure with header, sidebar, main content, and optional footer.
                The sidebar automatically collapses on mobile (md breakpoint) and can be toggled manually.
              </p>
            </Stack>
            <Card>
              <Stack gap="sm">
                <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Features</h3>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: 'var(--color-theme-text-secondary)' }}>
                  <li>Responsive sidebar collapse</li>
                  <li>Sticky header support</li>
                  <li>Full-height layout</li>
                  <li>Semantic HTML structure</li>
                </ul>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </PageLayout>
    );
  },
};

export const CompleteExample: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="2xl">
          <Section spacing="xl" divider>
            <Stack gap="md">
              <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Complete Layout Example</h1>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                All layout components work together seamlessly to create responsive, accessible interfaces.
              </p>
              <Cluster gap="sm" wrap>
                <Badge>Container</Badge>
                <Badge>Stack</Badge>
                <Badge>Grid</Badge>
                <Badge>Section</Badge>
                <Badge>Cluster</Badge>
              </Cluster>
            </Stack>
          </Section>

          <Section spacing="lg" divider>
            <Grid columns={12} gap="lg">
              <GridItem span={{ base: 12, md: 8 }}>
                <Card header="Main Content">
                  <Stack gap="md">
                    <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                      Use Grid and GridItem to create responsive column layouts. Items stack on mobile and display side-by-side on larger screens.
                    </p>
                    <Split
                      start={
                        <div
                          style={{
                            padding: 'var(--spacing-4)',
                            background: 'var(--color-theme-surface)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-theme-border)',
                          }}
                        >
                          Split Left
                        </div>
                      }
                      end={
                        <div
                          style={{
                            padding: 'var(--spacing-4)',
                            background: 'var(--color-theme-surface)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-theme-border)',
                          }}
                        >
                          Split Right
                        </div>
                      }
                      gap="md"
                      collapseAt="md"
                    />
                  </Stack>
                </Card>
              </GridItem>
              <GridItem span={{ base: 12, md: 4 }}>
                <Card header="Sidebar">
                  <Stack gap="sm" dividers>
                    <Tile title="Widget 1" body="Sidebar content" />
                    <Tile title="Widget 2" body="More content" />
                  </Stack>
                </Card>
              </GridItem>
            </Grid>
          </Section>

          <Section spacing="lg">
            <Card>
              <Stack gap="md">
                <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Best Practices</h3>
                <Stack gap="sm">
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    • Use Container to constrain content width and center it
                  </p>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    • Use Section for semantic grouping with consistent spacing
                  </p>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    • Use Grid for multi-column layouts, Stack for simple vertical/horizontal layouts
                  </p>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    • Always use spacing tokens, never hard-code values
                  </p>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    • Test layouts at different screen sizes to ensure responsiveness
                  </p>
                </Stack>
              </Stack>
            </Card>
          </Section>
        </Stack>
      </Container>
    </div>
  ),
};
