import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { vars } from '../../globals.css';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Sidebar, SidebarItem } from '../Navigation/Sidebar';
import { TopNav, NavLinkItem } from '../Navigation/TopNav';
import { PageLayout } from './PageLayout';
import { Stack } from './Stack';

const meta: Meta<typeof PageLayout> = {
  title: 'Layout/Phase 3 - PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

const mockSidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: '📊', href: '#' },
  { label: 'Documents', icon: '📄', href: '#' },
  { label: 'Contacts', icon: '👥', href: '#' },
  { label: 'Settings', icon: '⚙️', href: '#' },
  { label: 'Reports', icon: '📈', href: '#' },
  { label: 'Help', icon: '❓', href: '#' },
];

const mockNavLinks: NavLinkItem[] = [
  { label: 'Home', href: '#', isActive: true },
  { label: 'Products', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

export const BasicPageLayout: Story = {
  render: () => (
    <PageLayout
      header={<TopNav brandName="Lyfeguard" links={mockNavLinks} actions={<Button variant="secondary">Sign In</Button>} />}
      sidebar={<Sidebar items={mockSidebarItems} />}
      contentPadding="lg"
      gap="none"
    >
      <Stack gap="xl" padding="lg">
        <Stack gap="md">
          <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Welcome to Lyfeguard</h1>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            This is a basic PageLayout with header, sidebar, and main content area.
          </p>
        </Stack>
        <Stack direction="row" gap="lg" style={{ flexWrap: 'wrap' }}>
          <Card style={{ flex: '1 1 300px' }}>
            <Stack gap="sm">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Card 1</h3>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>Content goes here</p>
            </Stack>
          </Card>
          <Card style={{ flex: '1 1 300px' }}>
            <Stack gap="sm">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Card 2</h3>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>More content</p>
            </Stack>
          </Card>
          <Card style={{ flex: '1 1 300px' }}>
            <Stack gap="sm">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Card 3</h3>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>Even more content</p>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </PageLayout>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <PageLayout
      header={<TopNav brandName="Lyfeguard" links={mockNavLinks} />}
      sidebar={<Sidebar items={mockSidebarItems} />}
      footer={
        <div
          style={{
            padding: vars.spacing[4],
            background: 'var(--color-theme-surface)',
            borderTop: `1px solid var(--color-theme-border)`,
            textAlign: 'center',
            color: 'var(--color-theme-text-secondary)',
          }}
        >
          <p style={{ margin: 0 }}>© 2024 Lyfeguard. All rights reserved.</p>
        </div>
      }
      contentPadding="lg"
      gap="none"
    >
      <Stack gap="xl" padding="lg">
        <Stack gap="md">
          <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Page with Footer</h1>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            This PageLayout includes a footer section at the bottom.
          </p>
        </Stack>
        <Card>
          <Stack gap="sm">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Main Content</h3>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Scroll down to see the footer remain at the bottom of the viewport.
            </p>
          </Stack>
        </Card>
      </Stack>
    </PageLayout>
  ),
};

export const StickyHeaderAndFooter: Story = {
  render: () => (
    <PageLayout
      header={<TopNav brandName="Lyfeguard" links={mockNavLinks} />}
      sidebar={<Sidebar items={mockSidebarItems} />}
      footer={
        <div
          style={{
            padding: vars.spacing[4],
            background: 'var(--color-theme-surface)',
            borderTop: `1px solid var(--color-theme-border)`,
            textAlign: 'center',
            color: 'var(--color-theme-text-secondary)',
          }}
        >
          <p style={{ margin: 0 }}>Sticky Footer - Always visible</p>
        </div>
      }
      stickyHeader
      stickyFooter
      contentPadding="lg"
      gap="none"
    >
      <Stack gap="xl" padding="lg">
        <Stack gap="md">
          <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Sticky Header & Footer</h1>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            The header and footer remain visible when scrolling the content.
          </p>
        </Stack>
        {Array.from({ length: 10 }).map((_, i) => (
          <Card key={i}>
            <Stack gap="sm">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Content Section {i + 1}</h3>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                Scroll to see the sticky header and footer remain in place.
              </p>
            </Stack>
          </Card>
        ))}
      </Stack>
    </PageLayout>
  ),
};

export const CollapsibleSidebar: Story = {
  render: () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
      <PageLayout
        header={
          <TopNav
            brandName="Lyfeguard"
            links={mockNavLinks}
            actions={
              <Button variant="secondary" onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? 'Expand' : 'Collapse'} Sidebar
              </Button>
            }
          />
        }
        sidebar={<Sidebar items={mockSidebarItems} />}
        collapsible
        isCollapsed={isCollapsed}
        sidebarWidth="250px"
        contentPadding="lg"
        gap="none"
      >
        <Stack gap="xl" padding="lg">
          <Stack gap="md">
            <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Collapsible Sidebar</h1>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              Use the button in the header to toggle the sidebar. The sidebar smoothly animates when collapsing or
              expanding.
            </p>
          </Stack>
          <Card>
            <Stack gap="sm">
              <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Main Content</h3>
              <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                The main content area expands to fill the available space when the sidebar is collapsed.
              </p>
            </Stack>
          </Card>
        </Stack>
      </PageLayout>
    );
  },
};

export const ResponsiveCollapse: Story = {
  render: () => (
    <PageLayout
      header={<TopNav brandName="Lyfeguard" links={mockNavLinks} />}
      sidebar={<Sidebar items={mockSidebarItems} />}
      collapseAt="md"
      sidebarWidth="250px"
      contentPadding="lg"
      gap="none"
    >
      <Stack gap="xl" padding="lg">
        <Stack gap="md">
          <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Responsive Layout</h1>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            Resize the viewport to see the sidebar automatically stack above the content on screens smaller than the md
            breakpoint (768px).
          </p>
        </Stack>
        <Card>
          <Stack gap="sm">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Responsive Behavior</h3>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              The layout adapts automatically to different screen sizes, ensuring optimal viewing on mobile, tablet, and
              desktop devices.
            </p>
          </Stack>
        </Card>
      </Stack>
    </PageLayout>
  ),
};

export const HeaderOnly: Story = {
  render: () => (
    <PageLayout
      header={<TopNav brandName="Lyfeguard" links={mockNavLinks} actions={<Button variant="secondary">Sign In</Button>} />}
      contentPadding="lg"
      gap="none"
    >
      <Stack gap="xl" padding="lg">
        <Stack gap="md">
          <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Header Only Layout</h1>
          <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
            PageLayout can be used with just a header, without a sidebar. Perfect for landing pages or simple
            applications.
          </p>
        </Stack>
        <Card>
          <Stack gap="sm">
            <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Full Width Content</h3>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              The content area takes the full width when no sidebar is present.
            </p>
          </Stack>
        </Card>
      </Stack>
    </PageLayout>
  ),
};

export const CompleteApplication: Story = {
  render: () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
      <PageLayout
        header={
          <TopNav
            brandName="Lyfeguard"
            links={mockNavLinks}
            actions={
              <Stack direction="row" gap="sm">
                <Button variant="secondary" onClick={() => setIsCollapsed(!isCollapsed)}>
                  {isCollapsed ? '☰' : '✕'}
                </Button>
                <Button variant="primary">New Document</Button>
              </Stack>
            }
          />
        }
        sidebar={<Sidebar items={mockSidebarItems} />}
        footer={
          <div
            style={{
              padding: vars.spacing[4],
              background: 'var(--color-theme-surface)',
              borderTop: `1px solid var(--color-theme-border)`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>© 2024 Lyfeguard</p>
            <Stack direction="row" gap="md">
              <a href="#" style={{ color: 'var(--color-theme-text-secondary)', textDecoration: 'none' }}>
                Privacy
              </a>
              <a href="#" style={{ color: 'var(--color-theme-text-secondary)', textDecoration: 'none' }}>
                Terms
              </a>
            </Stack>
          </div>
        }
        collapsible
        isCollapsed={isCollapsed}
        stickyHeader
        sidebarWidth="250px"
        contentPadding="lg"
        gap="none"
      >
        <Stack gap="xl" padding="lg">
          <Stack gap="md">
            <h1 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Complete Application Layout</h1>
            <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
              This example demonstrates a complete application layout with all features: header, collapsible sidebar,
              main content, and footer.
            </p>
          </Stack>
          <Stack direction="row" gap="lg" style={{ flexWrap: 'wrap' }}>
            <Card style={{ flex: '1 1 300px' }}>
              <Stack gap="sm">
                <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Dashboard</h3>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  Overview of your account and recent activity.
                </p>
              </Stack>
            </Card>
            <Card style={{ flex: '1 1 300px' }}>
              <Stack gap="sm">
                <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Documents</h3>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  Manage and organize your documents.
                </p>
              </Stack>
            </Card>
            <Card style={{ flex: '1 1 300px' }}>
              <Stack gap="sm">
                <h3 style={{ margin: 0, color: 'var(--color-theme-text-primary)' }}>Contacts</h3>
                <p style={{ margin: 0, color: 'var(--color-theme-text-secondary)' }}>
                  View and manage your contacts.
                </p>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </PageLayout>
    );
  },
};

