import React, { useState } from 'react';
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
  AspectRatio,
  Center,
  Cluster,
  Flex,
  Split,
  PageLayout,
  TopNav,
  Sidebar,
} from '@lyfeguard/design-system';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');

  const sidebarItems = [
    { label: 'Components', icon: '🧩', href: '#components' },
    { label: 'Forms', icon: '📝', href: '#forms' },
    { label: 'Layout', icon: '📐', href: '#layout' },
    { label: 'Data', icon: '📊', href: '#data' },
  ];

  const navLinks = [
    { label: 'Home', href: '#', isActive: true },
    { label: 'Components', href: '#components' },
    { label: 'Documentation', href: '#' },
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
            <Cluster gap="sm" wrap>
              <Button variant="secondary" size="sm" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                {sidebarCollapsed ? '☰' : '✕'}
              </Button>
              <Button variant="primary" size="sm">
                Sign In
              </Button>
            </Cluster>
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
      <div style={{ height: '100%', overflowY: 'auto' }}>
        <Container>
          <Stack gap="2xl" padding={{ base: 'lg', md: 'xl' }}>
            {/* Hero Section */}
            <Section spacing="xl">
              <Stack gap="md">
                <h1 style={{ margin: 0, fontSize: '2.5rem', color: 'var(--color-theme-text-primary)' }}>
                  Design System Playground
                </h1>
                <p style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-theme-text-secondary)' }}>
                  Explore all components from the Lyfeguard design system. See how they work together to build
                  beautiful, accessible interfaces.
                </p>
                <Cluster gap="sm" wrap>
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Vanilla Extract</Badge>
                  <Badge>Accessible</Badge>
                  <Badge>Responsive</Badge>
                </Cluster>
              </Stack>
            </Section>

            {/* Buttons */}
            <Section spacing="lg" divider>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Buttons</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    All button variants and sizes
                  </p>
                </Stack>
                <Grid columns={12} gap="lg">
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Variants</h3>
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
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Sizes</h3>
                        <Cluster gap="sm" align="center">
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
                        <Stack gap="sm">
                          <Button variant="primary" loading>
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

            {/* Form Controls */}
            <Section spacing="lg" divider>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Form Controls</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    Input fields, selects, checkboxes, and more
                  </p>
                </Stack>
                <Grid columns={12} gap="lg">
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Text Inputs</h3>
                        <Input label="Name" placeholder="Enter your name" />
                        <Input label="Email" type="email" placeholder="you@example.com" />
                        <Input label="Password" type="password" placeholder="••••••••" />
                        <Textarea label="Message" placeholder="Enter your message" rows={4} />
                      </Stack>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Select & Date</h3>
                        <Select label="Country">
                          <option value="">Select a country</option>
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="ca">Canada</option>
                        </Select>
                        <DateInput label="Birth Date" />
                        <FileUpload label="Upload File" accept=".pdf,.doc,.docx" />
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
                <Grid columns={12} gap="lg">
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Checkboxes & Toggle</h3>
                        <Checkbox
                          label="I agree to the terms and conditions"
                          checked={checkboxChecked}
                          onChange={(e) => setCheckboxChecked(e.target.checked)}
                        />
                        <Checkbox label="Subscribe to newsletter" />
                        <Checkbox label="Disabled checkbox" disabled />
                        <Toggle
                          label="Enable notifications"
                          checked={toggleChecked}
                          onChange={(e) => setToggleChecked(e.target.checked)}
                        />
                      </Stack>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Radio Group</h3>
                        <RadioGroup
                          label="Select an option"
                          value={radioValue}
                          onChange={setRadioValue}
                          options={[
                            { value: 'option1', label: 'Option 1' },
                            { value: 'option2', label: 'Option 2' },
                            { value: 'option3', label: 'Option 3' },
                          ]}
                        />
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
              </Stack>
            </Section>

            {/* Cards & Badges */}
            <Section spacing="lg" divider>
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
                        <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                          Standard card with default padding and styling.
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
                      <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                        Cards can have optional headers and footers for structured content.
                      </p>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, md: 4 }}>
                    <Card clickable onClick={() => setModalOpen(true)}>
                      <Stack gap="sm">
                        <h4 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Clickable Card</h4>
                        <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                          Click me to open a modal!
                        </p>
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
                <Card>
                  <Stack gap="md">
                    <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Badge Variants</h3>
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

            {/* Alerts & Feedback */}
            <Section spacing="lg" divider>
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
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Progress Bar</h3>
                        <ProgressBar value={65} label="Progress: 65%" />
                        <ProgressBar value={30} label="Progress: 30%" />
                        <ProgressBar value={90} label="Progress: 90%" />
                      </Stack>
                    </Card>
                  </GridItem>
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Spinner</h3>
                        <Flex gap="md" align="center" wrap="wrap">
                          <Flex direction="column" gap="sm" align="center">
                            <Spinner size="sm" />
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-theme-text-secondary)' }}>
                              Small
                            </span>
                          </Flex>
                          <Flex direction="column" gap="sm" align="center">
                            <Spinner size="md" />
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-theme-text-secondary)' }}>
                              Medium
                            </span>
                          </Flex>
                          <Flex direction="column" gap="sm" align="center">
                            <Spinner size="lg" />
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-theme-text-secondary)' }}>
                              Large
                            </span>
                          </Flex>
                        </Flex>
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
              </Stack>
            </Section>

            {/* Data Display */}
            <Section spacing="lg" divider>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Data Display</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    Tables, tabs, and avatars
                  </p>
                </Stack>
                <Card>
                  <Stack gap="md">
                    <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Tabs</h3>
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
                    <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Table</h3>
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
                    <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Avatars</h3>
                    <Cluster gap="md" align="center">
                      <Flex direction="column" gap="xs" align="center">
                        <Avatar size="sm" name="John Doe" />
                        <span style={{ fontSize: '0.875rem' }}>Small</span>
                      </Flex>
                      <Flex direction="column" gap="xs" align="center">
                        <Avatar size="md" name="Jane Smith" />
                        <span style={{ fontSize: '0.875rem' }}>Medium</span>
                      </Flex>
                      <Flex direction="column" gap="xs" align="center">
                        <Avatar size="lg" name="Bob Johnson" />
                        <span style={{ fontSize: '0.875rem' }}>Large</span>
                      </Flex>
                    </Cluster>
                  </Stack>
                </Card>
              </Stack>
            </Section>

            {/* Layout Components */}
            <Section spacing="lg" divider>
              <Stack gap="lg">
                <Stack gap="sm">
                  <h2 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Layout Components</h2>
                  <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                    Building blocks for creating responsive layouts
                  </p>
                </Stack>
                <Grid columns={12} gap="lg">
                  <GridItem span={{ base: 12, md: 6 }}>
                    <Card>
                      <Stack gap="md">
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>AspectRatio</h3>
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
                      <Stack gap="md">
                        <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Split Layout</h3>
                        <Split
                          start={
                            <div
                              style={{
                                padding: 'var(--spacing-4)',
                                background: 'var(--color-brand-100)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--color-brand-700)',
                                textAlign: 'center',
                              }}
                            >
                              30%
                            </div>
                          }
                          end={
                            <div
                              style={{
                                padding: 'var(--spacing-4)',
                                background: 'var(--color-accent-100)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--color-accent-700)',
                                textAlign: 'center',
                              }}
                            >
                              70%
                            </div>
                          }
                          fraction={0.3}
                          gap="md"
                          collapseAt="md"
                        />
                      </Stack>
                    </Card>
                  </GridItem>
                </Grid>
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
