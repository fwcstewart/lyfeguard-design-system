import React, { useState } from 'react';
import {
  Button,
  Input,
  Select,
  Textarea,
  Card,
  Modal,
  Badge,
  Container,
  Stack,
  Grid,
  GridItem,
  Section,
  AspectRatio,
  Center,
  Cluster,
  Flex,
  Split,
  SidebarLayout,
  PageLayout,
  TopNav,
  Sidebar,
} from '@lyfeguard/design-system';

export default function App() {
  const [open, setOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sidebarItems = [
    { label: 'Dashboard', icon: '📊', href: '#' },
    { label: 'Documents', icon: '📄', href: '#' },
    { label: 'Contacts', icon: '👥', href: '#' },
    { label: 'Settings', icon: '⚙️', href: '#' },
  ];

  const navLinks = [
    { label: 'Home', href: '#', isActive: true },
    { label: 'Components', href: '#' },
    { label: 'Layout', href: '#' },
  ];

  return (
    <PageLayout
      header={
        <TopNav
          brandName="Lyfeguard Design System"
          links={navLinks}
          actions={
            <Button variant="secondary" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              {sidebarCollapsed ? '☰' : '✕'}
            </Button>
          }
        />
      }
      sidebar={<Sidebar items={sidebarItems} />}
      collapsible
      isCollapsed={sidebarCollapsed}
      contentPadding="lg"
      gap="none"
    >
      <Container>
        <Stack gap="2xl" padding={{ base: 'lg', md: 'xl' }}>
          {/* Hero Section */}
          <Section spacing="xl" divider>
            <Stack gap="md">
              <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>
                Lyfeguard Design System Playground
              </h1>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                Explore all the layout components and see how they work together to build responsive, accessible
                interfaces.
              </p>
              <Cluster gap="sm" wrap>
                <Badge>Phase 1</Badge>
                <Badge>Phase 2</Badge>
                <Badge>Phase 3</Badge>
                <Badge>Layout System</Badge>
              </Cluster>
            </Stack>
          </Section>

          {/* Form Example */}
          <Section spacing="lg" divider>
            <Stack gap="md">
              <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Form Components</h2>
              <Grid columns={12} gap="lg">
                <GridItem span={{ base: 12, md: 6 }}>
                  <Card>
                    <Stack gap="md">
                      <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>User Form</h3>
                      <Input label="Name" placeholder="Enter your name" />
                      <Input label="Email" placeholder="you@example.com" type="email" />
                      <Select label="Role">
                        <option value="">Select a role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </Select>
                      <Textarea label="Bio" placeholder="Tell us about yourself" />
                      <Button variant="primary" onClick={() => setOpen(true)}>
                        Submit
                      </Button>
                    </Stack>
                  </Card>
                </GridItem>
                <GridItem span={{ base: 12, md: 6 }}>
                  <Card>
                    <Stack gap="md">
                      <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Layout Components</h3>
                      <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                        This playground demonstrates all the layout components from Phase 1, 2, and 3.
                      </p>
                      <Cluster gap="sm" wrap>
                        <Badge>Container</Badge>
                        <Badge>Stack</Badge>
                        <Badge>Grid</Badge>
                        <Badge>Section</Badge>
                        <Badge>AspectRatio</Badge>
                        <Badge>Center</Badge>
                        <Badge>Cluster</Badge>
                        <Badge>Flex</Badge>
                        <Badge>Split</Badge>
                        <Badge>SidebarLayout</Badge>
                        <Badge>PageLayout</Badge>
                      </Cluster>
                    </Stack>
                  </Card>
                </GridItem>
              </Grid>
            </Stack>
          </Section>

          {/* Phase 1 Components */}
          <Section spacing="lg" divider>
            <Stack gap="lg">
              <Stack gap="md">
                <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Phase 1: Composition Helpers</h2>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  Section, AspectRatio, Center, and Cluster components for building consistent layouts.
                </p>
              </Stack>

              <Grid columns={12} gap="lg">
                <GridItem span={{ base: 12, md: 6 }}>
                  <Card>
                    <Stack gap="sm">
                      <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>AspectRatio Example</h4>
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
                          16:9 Aspect Ratio
                        </div>
                      </AspectRatio>
                    </Stack>
                  </Card>
                </GridItem>
                <GridItem span={{ base: 12, md: 6 }}>
                  <Card>
                    <Stack gap="sm">
                      <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Center Example</h4>
                      <Center maxWidth="300px" padding="md">
                        <Stack gap="sm" style={{ textAlign: 'center' }}>
                          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                            This content is centered with a max-width constraint.
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
            </Stack>
          </Section>

          {/* Phase 2 Components */}
          <Section spacing="lg" divider>
            <Stack gap="lg">
              <Stack gap="md">
                <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Phase 2: Advanced Layouts</h2>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  Flex, Split, and SidebarLayout for more complex layout patterns.
                </p>
              </Stack>

              <Card>
                <Stack gap="md">
                  <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Split Example</h4>
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

              <Card>
                <Stack gap="md">
                  <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Flex Example</h4>
                  <Flex gap="md" wrap="wrap" justify="space-between" align="center">
                    <Button variant="primary">Button 1</Button>
                    <Button variant="secondary">Button 2</Button>
                    <Button variant="tertiary">Button 3</Button>
                    <Cluster gap="xs">
                      <Badge>Flex</Badge>
                      <Badge>Layout</Badge>
                    </Cluster>
                  </Flex>
                </Stack>
              </Card>
            </Stack>
          </Section>

          {/* Phase 3 Components */}
          <Section spacing="lg">
            <Stack gap="md">
              <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Phase 3: Page Structure</h2>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                This entire page is built using PageLayout, which provides the header, sidebar, and main content
                structure. The sidebar can be collapsed using the button in the header.
              </p>
            </Stack>
          </Section>
        </Stack>
      </Container>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Stack gap="md">
          <h2 style={{ margin: 0 }}>Thank you!</h2>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            Your information has been submitted successfully.
          </p>
          <Cluster gap="sm" justify="end">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Close
            </Button>
          </Cluster>
        </Stack>
      </Modal>
    </PageLayout>
  );
}
