import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { PageLayout } from './PageLayout';
import { spacingTokens } from './spacing';

describe('PageLayout', () => {
  it('renders with correct data attribute', () => {
    render(
      <PageLayout data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-lyfeguard')).toBe('PageLayout');
  });

  it('renders children in main content area', () => {
    render(
      <PageLayout>
        <div data-testid="content">Main Content</div>
      </PageLayout>,
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();
    const content = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Content"]');
    expect(content).toBeInTheDocument();
    expect(content?.textContent).toBe('Main Content');
  });

  it('renders header when provided', () => {
    render(
      <PageLayout header={<div data-testid="header">Header Content</div>}>
        <div>Content</div>
      </PageLayout>,
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    const header = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Header"]');
    expect(header).toBeInTheDocument();
  });

  it('renders sidebar when provided', () => {
    render(
      <PageLayout sidebar={<div data-testid="sidebar">Sidebar Content</div>}>
        <div>Content</div>
      </PageLayout>,
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const sidebar = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Sidebar"]');
    expect(sidebar).toBeInTheDocument();
  });

  it('renders footer when provided', () => {
    render(
      <PageLayout footer={<div data-testid="footer">Footer Content</div>}>
        <div>Content</div>
      </PageLayout>,
    );
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    const footer = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Footer"]');
    expect(footer).toBeInTheDocument();
  });

  it('applies default sidebar width', () => {
    render(
      <PageLayout sidebar={<div>Sidebar</div>}>
        <div>Content</div>
      </PageLayout>,
    );
    const sidebar = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Sidebar"]');
    expect((sidebar as HTMLElement).style.width).toBe('250px');
  });

  it('applies custom sidebar width', () => {
    render(
      <PageLayout sidebar={<div>Sidebar</div>} sidebarWidth="300px">
        <div>Content</div>
      </PageLayout>,
    );
    const sidebar = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Sidebar"]');
    expect((sidebar as HTMLElement).style.width).toBe('300px');
  });

  it('applies responsive gap variables', () => {
    render(
      <PageLayout
        sidebar={<div>Sidebar</div>}
        gap={{ base: 'sm', lg: 'xl' }}
        data-testid="layout"
      >
        <div>Content</div>
      </PageLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.style.getPropertyValue('--page-layout-gap')).toBe(spacingTokens.sm);
    expect(layout.style.getPropertyValue('--page-layout-gap-lg')).toBe(spacingTokens.xl);
  });

  it('applies responsive content padding', () => {
    render(
      <PageLayout
        sidebar={<div>Sidebar</div>}
        contentPadding={{ base: 'md', xl: '2xl' }}
        data-testid="layout"
      >
        <div>Content</div>
      </PageLayout>,
    );
    const content = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Content"]');
    expect((content as HTMLElement).style.getPropertyValue('--page-layout-content-padding')).toBe(spacingTokens.md);
    expect((content as HTMLElement).style.getPropertyValue('--page-layout-content-padding-xl')).toBe(
      spacingTokens['2xl'],
    );
  });

  it('applies collapseAt breakpoint', () => {
    render(
      <PageLayout sidebar={<div>Sidebar</div>} collapseAt="md" data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-collapse-at')).toBe('md');
  });

  it('handles collapsible sidebar', () => {
    const { rerender } = render(
      <PageLayout sidebar={<div>Sidebar</div>} collapsible isCollapsed={false} data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    let layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-collapsible')).toBe('true');
    expect(layout.getAttribute('data-collapsed')).toBeNull();

    rerender(
      <PageLayout sidebar={<div>Sidebar</div>} collapsible isCollapsed={true} data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-collapsed')).toBe('true');
  });

  it('collapses sidebar when isCollapsed is true', () => {
    render(
      <PageLayout sidebar={<div>Sidebar</div>} collapsible isCollapsed={true} data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const sidebar = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Sidebar"]');
    expect((sidebar as HTMLElement).style.width).toBe('0');
    expect((sidebar as HTMLElement).style.overflow).toBe('hidden');
  });

  it('applies full height by default', () => {
    render(
      <PageLayout data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-full-height')).toBe('true');
  });

  it('disables full height when fullHeight is false', () => {
    render(
      <PageLayout fullHeight={false} data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-full-height')).toBeNull();
  });

  it('applies sticky header when stickyHeader is true', () => {
    render(
      <PageLayout header={<div>Header</div>} stickyHeader data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const header = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Header"]');
    expect(header?.className).toContain('pageLayoutHeaderSticky');
  });

  it('applies sticky footer when stickyFooter is true', () => {
    render(
      <PageLayout footer={<div>Footer</div>} stickyFooter data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const footer = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Footer"]');
    expect(footer?.className).toContain('pageLayoutFooterSticky');
  });

  it('applies min sidebar width', () => {
    render(
      <PageLayout sidebar={<div>Sidebar</div>} minSidebarWidth="200px" data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.style.getPropertyValue('--page-layout-min-sidebar-width')).toBe('200px');
  });

  it('renders body structure correctly', () => {
    render(
      <PageLayout sidebar={<div>Sidebar</div>} data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const body = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Body"]');
    expect(body).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <PageLayout ref={ref}>
        <div>Content</div>
      </PageLayout>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders without sidebar when not provided', () => {
    render(
      <PageLayout data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const sidebar = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Sidebar"]');
    expect(sidebar).not.toBeInTheDocument();
  });

  it('renders without header when not provided', () => {
    render(
      <PageLayout data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const header = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Header"]');
    expect(header).not.toBeInTheDocument();
  });

  it('renders without footer when not provided', () => {
    render(
      <PageLayout data-testid="layout">
        <div>Content</div>
      </PageLayout>,
    );
    const footer = screen.getByTestId('layout').querySelector('[data-lyfeguard="PageLayout.Footer"]');
    expect(footer).not.toBeInTheDocument();
  });
});

