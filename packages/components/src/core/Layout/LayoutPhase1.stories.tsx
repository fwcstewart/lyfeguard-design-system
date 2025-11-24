import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { vars } from '../../globals.css';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { AspectRatio } from './AspectRatio';
import { Center } from './Center';
import { Cluster } from './Cluster';
import { Container } from './Container';
import { Section } from './Section';
import { Stack } from './Stack';

const meta: Meta<typeof Section> = {
  title: 'Layout/Phase 1 Components',
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const SectionExample: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="xl">
          <Section spacing="xl" divider>
            <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Section with Divider</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Sections provide semantic grouping with consistent spacing. The divider prop adds a visual separator.
            </p>
          </Section>

          <Section spacing={{ base: 'lg', md: 'xl' }} padding="lg">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Section with Responsive Spacing</h3>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Spacing and padding support responsive values that adapt at different breakpoints.
            </p>
          </Section>

          <Section as="div" spacing="md">
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Use the `as` prop to change the semantic element. This section uses a `div` instead of `section`.
            </p>
          </Section>
        </Stack>
      </Container>
    </div>
  ),
};

export const AspectRatioExample: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="xl">
          <Stack gap="md">
            <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Aspect Ratio Examples</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              AspectRatio maintains consistent proportions for images, videos, and cards.
            </p>
          </Stack>

          <Stack direction="row" gap="lg" wrap="wrap">
            <Stack gap="sm" style={{ flex: '1 1 300px' }}>
              <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>16:9 (Widescreen)</h4>
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
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  16:9
                </div>
              </AspectRatio>
            </Stack>

            <Stack gap="sm" style={{ flex: '1 1 300px' }}>
              <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>1:1 (Square)</h4>
              <AspectRatio ratio={1} fit="cover">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, var(--color-accent-500), var(--color-accent-700))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  1:1
                </div>
              </AspectRatio>
            </Stack>

            <Stack gap="sm" style={{ flex: '1 1 300px' }}>
              <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>4:3 (Traditional)</h4>
              <AspectRatio ratio={4 / 3} fit="cover">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, var(--color-success-500), var(--color-success-700))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  4:3
                </div>
              </AspectRatio>
            </Stack>
          </Stack>

          <Card>
            <Stack gap="sm">
              <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Card with Aspect Ratio Image</h4>
              <AspectRatio ratio={16 / 9} fit="cover">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, var(--color-brand-400), var(--color-accent-400))',
                  }}
                />
              </AspectRatio>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                AspectRatio works great inside cards to maintain consistent image proportions.
              </p>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </div>
  ),
};

export const CenterExample: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="xl">
          <Stack gap="md">
            <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Center Examples</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Center quickly centers content horizontally, optionally with max-width constraints.
            </p>
          </Stack>

          <Section spacing="lg" divider>
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Centered Button</h3>
            <Center>
              <Button variant="primary">Centered Button</Button>
            </Center>
          </Section>

          <Section spacing="lg" divider>
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Centered Content with Max Width</h3>
            <Center maxWidth="600px" padding="lg">
              <Stack gap="sm" style={{ textAlign: 'center' }}>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  This content is centered and constrained to a maximum width of 600px. The padding prop adds
                  responsive spacing around the content.
                </p>
                <Cluster gap="sm" justify="center">
                  <Badge>Tag 1</Badge>
                  <Badge>Tag 2</Badge>
                  <Badge>Tag 3</Badge>
                </Cluster>
              </Stack>
            </Center>
          </Section>

          <Section spacing="lg">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Centered Card</h3>
            <Center maxWidth="400px">
              <Card>
                <Stack gap="sm">
                  <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Centered Card</h4>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    Cards and other components work seamlessly with Center.
                  </p>
                </Stack>
              </Card>
            </Center>
          </Section>
        </Stack>
      </Container>
    </div>
  ),
};

export const ClusterExample: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="xl">
          <Stack gap="md">
            <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Cluster Examples</h2>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Cluster groups items horizontally with consistent spacing and automatic wrapping. Perfect for tags,
              badges, buttons, and inline content.
            </p>
          </Stack>

          <Section spacing="lg" divider>
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Badge Cluster</h3>
            <Cluster gap="sm" wrap>
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Vanilla Extract</Badge>
              <Badge>Design Tokens</Badge>
              <Badge>Accessibility</Badge>
              <Badge>Responsive</Badge>
              <Badge>Composable</Badge>
            </Cluster>
          </Section>

          <Section spacing="lg" divider>
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Button Cluster</h3>
            <Cluster gap="md" justify="start">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </Cluster>
          </Section>

          <Section spacing="lg" divider>
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Aligned Clusters</h3>
            <Stack gap="md">
              <Cluster gap="sm" align="start" justify="start">
                <Badge>Start</Badge>
                <Badge>Aligned</Badge>
                <Badge>Items</Badge>
              </Cluster>
              <Cluster gap="sm" align="center" justify="center">
                <Badge>Center</Badge>
                <Badge>Aligned</Badge>
                <Badge>Items</Badge>
              </Cluster>
              <Cluster gap="sm" align="end" justify="end">
                <Badge>End</Badge>
                <Badge>Aligned</Badge>
                <Badge>Items</Badge>
              </Cluster>
              <Cluster gap="sm" justify="space-between">
                <Badge>Space</Badge>
                <Badge>Between</Badge>
                <Badge>Items</Badge>
              </Cluster>
            </Stack>
          </Section>

          <Section spacing="lg">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Responsive Gap</h3>
            <Cluster gap={{ base: 'xs', md: 'sm', lg: 'md' }} wrap>
              <Badge>Responsive</Badge>
              <Badge>Gap</Badge>
              <Badge>Tokens</Badge>
              <Badge>Adapt</Badge>
              <Badge>At</Badge>
              <Badge>Breakpoints</Badge>
            </Cluster>
          </Section>
        </Stack>
      </Container>
    </div>
  ),
};

export const CombinedExample: Story = {
  render: () => (
    <div style={{ background: 'var(--color-theme-background)', padding: vars.spacing[9] }}>
      <Container>
        <Stack gap="2xl">
          <Section spacing="xl" divider>
            <Stack gap="md">
              <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Combined Layout Example</h1>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                All Phase 1 layout components work together seamlessly to create rich, responsive layouts.
              </p>
              <Cluster gap="sm" wrap>
                <Badge>Section</Badge>
                <Badge>AspectRatio</Badge>
                <Badge>Center</Badge>
                <Badge>Cluster</Badge>
              </Cluster>
            </Stack>
          </Section>

          <Section spacing="xl" divider>
            <Stack gap="lg">
              <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Featured Content</h2>
              <Stack direction="row" gap="lg" wrap="wrap">
                <Card style={{ flex: '1 1 300px' }}>
                  <Stack gap="sm">
                    <AspectRatio ratio={16 / 9} fit="cover">
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(135deg, var(--color-brand-500), var(--color-brand-700))',
                        }}
                      />
                    </AspectRatio>
                    <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Card Title</h4>
                    <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                      Cards with aspect ratio images maintain consistent proportions.
                    </p>
                    <Cluster gap="xs" wrap>
                      <Badge>Tag</Badge>
                      <Badge>Example</Badge>
                    </Cluster>
                  </Stack>
                </Card>

                <Card style={{ flex: '1 1 300px' }}>
                  <Stack gap="sm">
                    <AspectRatio ratio={16 / 9} fit="cover">
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(135deg, var(--color-accent-500), var(--color-accent-700))',
                        }}
                      />
                    </AspectRatio>
                    <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Another Card</h4>
                    <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                      All components use design tokens for consistent spacing and styling.
                    </p>
                    <Cluster gap="xs" wrap>
                      <Badge>Design</Badge>
                      <Badge>System</Badge>
                    </Cluster>
                  </Stack>
                </Card>
              </Stack>
            </Stack>
          </Section>

          <Section spacing="xl">
            <Center maxWidth="600px" padding="lg">
              <Stack gap="md" style={{ textAlign: 'center' }}>
                <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Centered Call to Action</h2>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  Combine Center with Stack and Cluster for powerful layout compositions.
                </p>
                <Cluster gap="md" justify="center">
                  <Button variant="primary">Get Started</Button>
                  <Button variant="secondary">Learn More</Button>
                </Cluster>
              </Stack>
            </Center>
          </Section>
        </Stack>
      </Container>
    </div>
  ),
};

