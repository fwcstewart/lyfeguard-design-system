import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Flex } from './Flex';
import { SidebarLayout } from './SidebarLayout';
import { Split } from './Split';
import { spacingTokens } from './spacing';

describe('Flex', () => {
  it('renders with correct data attribute', () => {
    render(<Flex data-testid="flex">Content</Flex>);
    const flex = screen.getByTestId('flex');
    expect(flex.getAttribute('data-lyfeguard')).toBe('Flex');
  });

  it('renders as a div by default', () => {
    render(<Flex data-testid="flex">Content</Flex>);
    const flex = screen.getByTestId('flex');
    expect(flex.tagName).toBe('DIV');
  });

  it('renders as a custom element when as prop is provided', () => {
    render(
      <Flex as="section" data-testid="flex">
        Content
      </Flex>,
    );
    const flex = screen.getByTestId('flex');
    expect(flex.tagName).toBe('SECTION');
  });

  it('applies direction style', () => {
    const { rerender } = render(
      <Flex data-testid="flex" direction="row">
        Content
      </Flex>,
    );
    let flex = screen.getByTestId('flex');
    expect(flex.style.flexDirection).toBe('row');

    rerender(
      <Flex data-testid="flex" direction="column">
        Content
      </Flex>,
    );
    flex = screen.getByTestId('flex');
    expect(flex.style.flexDirection).toBe('column');
  });

  it('applies responsive gap variables', () => {
    render(
      <Flex data-testid="flex" gap={{ base: 'sm', lg: 'xl' }}>
        Content
      </Flex>,
    );
    const flex = screen.getByTestId('flex');
    expect(flex.style.getPropertyValue('--flex-gap')).toBe(spacingTokens.sm);
    expect(flex.style.getPropertyValue('--flex-gap-lg')).toBe(spacingTokens.xl);
  });

  it('applies flex grow, shrink, and basis', () => {
    render(
      <Flex data-testid="flex" grow={2} shrink={1} basis="300px">
        Content
      </Flex>,
    );
    const flex = screen.getByTestId('flex');
    expect(flex.style.flexGrow).toBe('2');
    expect(flex.style.flexShrink).toBe('1');
    expect(flex.style.flexBasis).toBe('300px');
  });

  it('applies alignment and justification', () => {
    render(
      <Flex data-testid="flex" align="center" justify="space-between">
        Content
      </Flex>,
    );
    const flex = screen.getByTestId('flex');
    expect(flex.style.alignItems).toBe('center');
    expect(flex.style.justifyContent).toBe('space-between');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLElement>();
    render(<Flex ref={ref}>Content</Flex>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('Split', () => {
  it('renders with correct data attribute', () => {
    render(
      <Split data-testid="split" start={<div>Start</div>} end={<div>End</div>} />,
    );
    const split = screen.getByTestId('split');
    expect(split.getAttribute('data-lyfeguard')).toBe('Split');
  });

  it('renders start and end content', () => {
    render(
      <Split data-testid="split" start={<div data-testid="start">Start</div>} end={<div data-testid="end">End</div>} />,
    );
    expect(screen.getByTestId('start')).toBeInTheDocument();
    expect(screen.getByTestId('end')).toBeInTheDocument();
  });

  it('applies default fraction of 0.5', () => {
    render(
      <Split data-testid="split" start={<div>Start</div>} end={<div>End</div>} />,
    );
    const split = screen.getByTestId('split');
    expect(split.getAttribute('data-fraction')).toBe('0.5');
  });

  it('applies custom fraction', () => {
    render(
      <Split data-testid="split" start={<div>Start</div>} end={<div>End</div>} fraction={0.3} />,
    );
    const split = screen.getByTestId('split');
    expect(split.getAttribute('data-fraction')).toBe('0.3');
  });

  it('clamps fraction to valid range', () => {
    const { rerender } = render(
      <Split data-testid="split" start={<div>Start</div>} end={<div>End</div>} fraction={-0.5} />,
    );
    let split = screen.getByTestId('split');
    expect(split.getAttribute('data-fraction')).toBe('0');

    rerender(<Split data-testid="split" start={<div>Start</div>} end={<div>End</div>} fraction={1.5} />);
    split = screen.getByTestId('split');
    expect(split.getAttribute('data-fraction')).toBe('1');
  });

  it('applies responsive gap variables', () => {
    render(
      <Split data-testid="split" start={<div>Start</div>} end={<div>End</div>} gap={{ base: 'sm', md: 'lg' }} />,
    );
    const split = screen.getByTestId('split');
    expect(split.style.getPropertyValue('--split-gap')).toBe(spacingTokens.sm);
    expect(split.style.getPropertyValue('--split-gap-md')).toBe(spacingTokens.lg);
  });

  it('applies column direction', () => {
    render(
      <Split data-testid="split" start={<div>Start</div>} end={<div>End</div>} direction="column" />,
    );
    const split = screen.getByTestId('split');
    expect(split.getAttribute('data-direction')).toBe('column');
  });

  it('applies collapseAt breakpoint', () => {
    render(
      <Split data-testid="split" start={<div>Start</div>} end={<div>End</div>} collapseAt="md" />,
    );
    const split = screen.getByTestId('split');
    expect(split.getAttribute('data-collapse-at')).toBe('md');
  });

  it('applies min width constraints', () => {
    render(
      <Split
        data-testid="split"
        start={<div>Start</div>}
        end={<div>End</div>}
        minStartWidth="200px"
        minEndWidth="300px"
      />,
    );
    const split = screen.getByTestId('split');
    expect(split.style.getPropertyValue('--split-min-start-width')).toBe('200px');
    expect(split.style.getPropertyValue('--split-min-end-width')).toBe('300px');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Split ref={ref} start={<div>Start</div>} end={<div>End</div>} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('SidebarLayout', () => {
  it('renders with correct data attribute', () => {
    render(
      <SidebarLayout data-testid="layout" sidebar={<div>Sidebar</div>}>
        Content
      </SidebarLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-lyfeguard')).toBe('SidebarLayout');
  });

  it('renders sidebar and content', () => {
    render(
      <SidebarLayout
        data-testid="layout"
        sidebar={<div data-testid="sidebar">Sidebar</div>}
      >
        <div data-testid="content">Content</div>
      </SidebarLayout>,
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('applies default sidebar width', () => {
    render(
      <SidebarLayout data-testid="layout" sidebar={<div>Sidebar</div>}>
        Content
      </SidebarLayout>,
    );
    const sidebar = screen.getByTestId('layout').querySelector('[data-lyfeguard="SidebarLayout.Sidebar"]');
    expect(sidebar).toBeInTheDocument();
    expect((sidebar as HTMLElement).style.width).toBe('250px');
  });

  it('applies custom sidebar width', () => {
    render(
      <SidebarLayout data-testid="layout" sidebar={<div>Sidebar</div>} sidebarWidth="300px">
        Content
      </SidebarLayout>,
    );
    const sidebar = screen.getByTestId('layout').querySelector('[data-lyfeguard="SidebarLayout.Sidebar"]');
    expect((sidebar as HTMLElement).style.width).toBe('300px');
  });

  it('applies responsive gap variables', () => {
    render(
      <SidebarLayout
        data-testid="layout"
        sidebar={<div>Sidebar</div>}
        gap={{ base: 'sm', lg: 'xl' }}
      >
        Content
      </SidebarLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.style.getPropertyValue('--sidebar-layout-gap')).toBe(spacingTokens.sm);
    expect(layout.style.getPropertyValue('--sidebar-layout-gap-lg')).toBe(spacingTokens.xl);
  });

  it('applies responsive content padding', () => {
    render(
      <SidebarLayout
        data-testid="layout"
        sidebar={<div>Sidebar</div>}
        contentPadding={{ base: 'md', xl: '2xl' }}
      >
        Content
      </SidebarLayout>,
    );
    const content = screen.getByTestId('layout').querySelector('[data-lyfeguard="SidebarLayout.Content"]');
    expect((content as HTMLElement).style.getPropertyValue('--sidebar-layout-content-padding')).toBe(spacingTokens.md);
    expect((content as HTMLElement).style.getPropertyValue('--sidebar-layout-content-padding-xl')).toBe(
      spacingTokens['2xl'],
    );
  });

  it('applies collapseAt breakpoint', () => {
    render(
      <SidebarLayout data-testid="layout" sidebar={<div>Sidebar</div>} collapseAt="md">
        Content
      </SidebarLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-collapse-at')).toBe('md');
  });

  it('handles collapsible sidebar', () => {
    const { rerender } = render(
      <SidebarLayout data-testid="layout" sidebar={<div>Sidebar</div>} collapsible isCollapsed={false}>
        Content
      </SidebarLayout>,
    );
    let layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-collapsible')).toBe('true');
    expect(layout.getAttribute('data-collapsed')).toBeNull();

    rerender(
      <SidebarLayout data-testid="layout" sidebar={<div>Sidebar</div>} collapsible isCollapsed={true}>
        Content
      </SidebarLayout>,
    );
    layout = screen.getByTestId('layout');
    expect(layout.getAttribute('data-collapsed')).toBe('true');
  });

  it('collapses sidebar when isCollapsed is true', () => {
    render(
      <SidebarLayout data-testid="layout" sidebar={<div>Sidebar</div>} collapsible isCollapsed={true}>
        Content
      </SidebarLayout>,
    );
    const sidebar = screen.getByTestId('layout').querySelector('[data-lyfeguard="SidebarLayout.Sidebar"]');
    expect((sidebar as HTMLElement).style.width).toBe('0');
    expect((sidebar as HTMLElement).style.overflow).toBe('hidden');
  });

  it('applies min sidebar width', () => {
    render(
      <SidebarLayout data-testid="layout" sidebar={<div>Sidebar</div>} minSidebarWidth="200px">
        Content
      </SidebarLayout>,
    );
    const layout = screen.getByTestId('layout');
    expect(layout.style.getPropertyValue('--sidebar-layout-min-width')).toBe('200px');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SidebarLayout ref={ref} sidebar={<div>Sidebar</div>}>Content</SidebarLayout>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

