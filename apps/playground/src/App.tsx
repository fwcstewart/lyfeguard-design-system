import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  Select,
  Textarea,
  Card,
  Modal,
  Badge,
  Alert,
  Checkbox,
  RadioGroup,
  Toggle,
  DateInput,
  FileUpload,
  Avatar,
  Spinner,
  ProgressBar,
  Tabs,
  Table,
  Container,
  Stack,
  Grid,
  GridItem,
  Section,
  Cluster,
  PageLayout,
  TopNav,
  Sidebar,
} from '@lyfeguard/design-system';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sidebarItems = [
    { label: 'Overview', icon: '🏠', href: '#overview' },
    { label: 'Buttons', icon: '🔘', href: '#buttons' },
    { label: 'Forms', icon: '📝', href: '#forms' },
    { label: 'Cards', icon: '🃏', href: '#cards' },
    { label: 'Feedback', icon: '💬', href: '#feedback' },
    { label: 'Layout', icon: '📐', href: '#layout' },
  ];

  const navLinks = [
    { label: 'Home', href: '#', isActive: true },
    { label: 'Components', href: '#components' },
  ];

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ];

  return (
    <PageLayout
      header={
        <TopNav
          brandName="Lyfeguard"
          links={navLinks}
          actions={
            <Button variant="secondary" size="sm" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              {sidebarCollapsed ? '☰' : '✕'}
            </Button>
          }
        />
      }
      sidebar={<Sidebar items={sidebarItems} />}
      collapsible
      isCollapsed={sidebarCollapsed}
      collapseAt="md"
      contentPadding="none"
      gap="none"
      fullHeight
      stickyHeader
    >
      <div style={{ height: '100%', overflowY: 'auto', width: '100%', minWidth: 0 }}>
        <Container>
          <Stack gap={{ base: 'lg', md: 'xl' }} padding={{ base: 'md', sm: 'lg', md: 'xl' }}>
            {/* Overview */}
            <Section id="overview" spacing={{ base: 'lg', md: 'xl' }}>
              <Stack gap="md">
                <h1
                  style={{
                    margin: 0,
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    color: 'var(--color-theme-text-primary)',
                    fontWeight: 700,
                  }}
                >
                  Design System Playground
                </h1>
                <p
                  style={{
                    margin: 0,
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: 'var(--color-theme-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  Explore and test all components from the Lyfeguard design system. This playground demonstrates how
                  components work together to build responsive, accessible interfaces.
                </p>
                <Cluster gap="sm" wrap>
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Accessible</Badge>
                  <Badge>Responsive</Badge>
                </Cluster>
              </Stack>
            </Section>

            {/* Buttons */}
            <Section id="buttons" spacing={{ base: 'lg', md: 'xl' }} divider>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Buttons</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    All button variants, sizes, and states
                  </p>
                </Stack>
                <Grid columns={12} gap="lg">
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                          Variants
                        </h3>
                        <Stack gap="sm">
                          <Button variant="primary">Primary</Button>
                          <Button variant="secondary">Secondary</Button>
                          <Button variant="tertiary">Tertiary</Button>
                          <Button variant="danger">Danger</Button>
                          <Button variant="ghost">Ghost</Button>
                        </Stack>
                      </Stack>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                          Sizes & States
                        </h3>
                        <Stack gap="sm">
                          <Cluster gap="sm" wrap>
                            <Button variant="primary" size="sm">
                              Small
                            </Button>
                            <Button variant="primary" size="md">
                              Medium
                            </Button>
                            <Button variant="primary" size="lg">
                              Large
                            </Button>
                          </Cluster>
                          <Button variant="primary" isLoading>
                            Loading
                          </Button>
                          <Button variant="primary" disabled>
                            Disabled
                          </Button>
                        </Stack>
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
              </Stack>
            </Section>

            {/* Forms */}
            <Section id="forms" spacing={{ base: 'lg', md: 'xl' }} divider>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Form Controls</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    Input fields, selects, checkboxes, and more
                  </p>
                </Stack>
                <Grid columns={12} gap="lg">
                  <GridItem span={{ base: 12, lg: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                          Text Inputs
                        </h3>
                        <Stack gap="md">
                          <Input label="Name" placeholder="Enter your name" />
                          <Input label="Email" type="email" placeholder="you@example.com" />
                          <Input label="Password" type="password" placeholder="••••••••" />
                          <Textarea label="Message" placeholder="Enter your message" rows={4} />
                        </Stack>
                      </Stack>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, lg: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                          Other Controls
                        </h3>
                        <Stack gap="md">
                          <Select label="Country">
                            <option value="">Select a country</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                          </Select>
                          <DateInput label="Birth Date" />
                          <FileUpload label="Upload File" accept=".pdf,.doc,.docx" />
                        </Stack>
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
                <Grid columns={12} gap="lg">
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                          Checkboxes & Toggle
                        </h3>
                        <Stack gap="md">
                          <Checkbox label="I agree to the terms and conditions" />
                          <Checkbox label="Subscribe to newsletter" defaultChecked />
                          <Checkbox label="Disabled checkbox" disabled />
                          <Toggle label="Enable notifications" />
                        </Stack>
                      </Stack>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                          Radio Group
                        </h3>
                        <RadioGroup
                          name="radio-options"
                          label="Select an option"
                          value="option1"
                          options={[
                            { value: 'option1', label: 'Option 1' },
                            { value: 'option2', label: 'Option 2' },
                            { value: 'option3', label: 'Option 3' },
                          ]}
                          onChange={(value) => console.log('Selected:', value)}
                        />
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
              </Stack>
            </Section>

            {/* Cards */}
            <Section id="cards" spacing={{ base: 'lg', md: 'xl' }} divider>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Cards & Badges</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    Content containers and status indicators
                  </p>
                </Stack>
                <Grid columns={12} gap="lg">
                  <GridItem span={{ base: 12, md: 4 }}>
                    <Card>
                      <Stack gap="sm">
                        <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Default Card</h4>
                        <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)', fontSize: '0.875rem' }}>
                          Standard card with default padding.
                        </p>
                        <Cluster gap="xs" wrap>
                          <Badge>New</Badge>
                          <Badge>Featured</Badge>
                        </Cluster>
                      </Stack>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, md: 4 }}>
                    <Card header="Card with Header" footer="Card Footer">
                      <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)', fontSize: '0.875rem' }}>
                        Cards can have optional headers and footers.
                      </p>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, md: 4 }}>
                    <Card clickable onClick={() => setModalOpen(true)}>
                      <Stack gap="sm">
                        <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Clickable Card</h4>
                        <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)', fontSize: '0.875rem' }}>
                          Click to open a modal.
                        </p>
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
                <Card>
                  <Stack gap="md">
                    <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                      Badge Variants
                    </h3>
                    <Cluster gap="sm" wrap>
                      <Badge>Default</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="error">Error</Badge>
                      <Badge variant="info">Info</Badge>
                    </Cluster>
                  </Stack>
                </Card>
              </Stack>
            </Section>

            {/* Feedback */}
            <Section id="feedback" spacing={{ base: 'lg', md: 'xl' }} divider>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Alerts & Feedback</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    Status messages and progress indicators
                  </p>
                </Stack>
                <Stack gap="md">
                  <Alert variant="info" title="Information">
                    This is an informational alert message.
                  </Alert>
                  <Alert variant="success" title="Success">
                    Your action was completed successfully!
                  </Alert>
                  <Alert variant="warning" title="Warning">
                    Please review this information carefully.
                  </Alert>
                  <Alert variant="error" title="Error">
                    Something went wrong. Please try again.
                  </Alert>
                </Stack>
                <Grid columns={12} gap="lg">
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                          Progress Bar
                        </h3>
                        <Stack gap="md">
                          <ProgressBar progress={65} label="Progress: 65%" />
                          <ProgressBar progress={30} label="Progress: 30%" />
                          <ProgressBar progress={90} label="Progress: 90%" />
                        </Stack>
                      </Stack>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                          Spinner
                        </h3>
                        <Cluster gap="lg" align="center" wrap>
                          <Stack gap="xs" align="center">
                            <Spinner size="sm" />
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-theme-text-secondary)' }}>
                              Small
                            </span>
                          </Stack>
                          <Stack gap="xs" align="center">
                            <Spinner size="md" />
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-theme-text-secondary)' }}>
                              Medium
                            </span>
                          </Stack>
                          <Stack gap="xs" align="center">
                            <Spinner size="lg" />
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-theme-text-secondary)' }}>
                              Large
                            </span>
                          </Stack>
                        </Cluster>
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
              </Stack>
            </Section>

            {/* Data Display */}
            <Section id="data" spacing={{ base: 'lg', md: 'xl' }} divider>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Data Display</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    Tables, tabs, and avatars
                  </p>
                </Stack>
                <Card>
                  <Stack gap="md">
                    <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>Tabs</h3>
                    <Tabs
                      tabs={[
                        {
                          label: 'Overview',
                          content: (
                            <div style={{ padding: 'var(--spacing-4)' }}>
                              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                                This is the overview tab content.
                              </p>
                            </div>
                          ),
                        },
                        {
                          label: 'Details',
                          content: (
                            <div style={{ padding: 'var(--spacing-4)' }}>
                              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                                This is the details tab content.
                              </p>
                            </div>
                          ),
                        },
                        {
                          label: 'Settings',
                          content: (
                            <div style={{ padding: 'var(--spacing-4)' }}>
                              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                                This is the settings tab content.
                              </p>
                            </div>
                          ),
                        },
                      ]}
                      defaultIndex={0}
                    />
                  </Stack>
                </Card>
                <Card>
                  <Stack gap="md">
                    <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>Table</h3>
                    <Table
                      columns={[
                        { header: 'Name', accessor: 'name' },
                        { header: 'Email', accessor: 'email' },
                        { header: 'Role', accessor: 'role' },
                      ]}
                      data={tableData}
                    />
                  </Stack>
                </Card>
                <Card>
                  <Stack gap="md">
                    <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                      Avatars
                    </h3>
                    <Cluster gap="lg" align="center" wrap>
                      <Stack gap="xs" align="center">
                        <Avatar size={32} name="John Doe" />
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-theme-text-secondary)' }}>Small</span>
                      </Stack>
                      <Stack gap="xs" align="center">
                        <Avatar size={48} name="Jane Smith" />
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-theme-text-secondary)' }}>
                          Medium
                        </span>
                      </Stack>
                      <Stack gap="xs" align="center">
                        <Avatar size={64} name="Bob Johnson" />
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-theme-text-secondary)' }}>Large</span>
                      </Stack>
                    </Cluster>
                  </Stack>
                </Card>
              </Stack>
            </Section>

            {/* Layout */}
            <Section id="layout" spacing={{ base: 'lg', md: 'xl' }}>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Layout Components</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    Building blocks for creating responsive layouts. This entire page uses PageLayout, Container, Stack,
                    Grid, and Section components.
                  </p>
                </Stack>
                <Card>
                  <Stack gap="md">
                    <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-primary)' }}>
                      Layout System
                    </h3>
                    <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                      The layout system provides components for structuring pages:
                    </p>
                    <Stack gap="sm" as="ul" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                      <li style={{ color: 'var(--color-theme-text-secondary)' }}>
                        <strong>Container</strong> - Centers and constrains content width
                      </li>
                      <li style={{ color: 'var(--color-theme-text-secondary)' }}>
                        <strong>Stack</strong> - Vertical or horizontal spacing
                      </li>
                      <li style={{ color: 'var(--color-theme-text-secondary)' }}>
                        <strong>Grid & GridItem</strong> - Responsive column layouts
                      </li>
                      <li style={{ color: 'var(--color-theme-text-secondary)' }}>
                        <strong>Section</strong> - Semantic grouping with spacing
                      </li>
                      <li style={{ color: 'var(--color-theme-text-secondary)' }}>
                        <strong>PageLayout</strong> - Complete page structure with header, sidebar, and content
                      </li>
                    </Stack>
                  </Stack>
                </Card>
              </Stack>
            </Section>
          </Stack>
        </Container>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Stack gap="md">
          <h2 style={{ margin: 0 }}>Modal Example</h2>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            This is a modal dialog. It can contain any content and includes a close button.
          </p>
          <Cluster gap="sm" justify="end">
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Confirm
            </Button>
          </Cluster>
        </Stack>
      </Modal>
    </PageLayout>
  );
}
