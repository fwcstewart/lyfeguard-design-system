import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Layout.css';
import { buildSpacingVars, ResponsiveSpacing } from './spacing';

export interface SidebarLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content to render in the sidebar area (typically navigation).
   */
  sidebar: React.ReactNode;
  /**
   * Content to render in the main content area.
   */
  children: React.ReactNode;
  /**
   * Width of the sidebar. Can be a fixed value (e.g., "250px") or a fraction
   * (e.g., "0.25" for 25% of available width). Defaults to "250px".
   */
  sidebarWidth?: string;
  /**
   * Gap between sidebar and main content using semantic spacing tokens.
   * Supports responsive values keyed by breakpoint (sm, md, lg, xl, xxl, widescreen).
   */
  gap?: ResponsiveSpacing;
  /**
   * Breakpoint at which the sidebar collapses and stacks above the main content.
   * If not provided, the sidebar remains visible at all breakpoints.
   */
  collapseAt?: 'sm' | 'md' | 'lg';
  /**
   * If true, the sidebar can be toggled on/off. Requires external state management.
   */
  collapsible?: boolean;
  /**
   * Whether the sidebar is currently collapsed (only applies when collapsible is true).
   */
  isCollapsed?: boolean;
  /**
   * Minimum width for the sidebar before it collapses. Only applies when
   * collapseAt is set.
   */
  minSidebarWidth?: string;
  /**
   * Padding applied to the main content area using spacing tokens. Supports
   * responsive values to adjust spacing at breakpoints.
   */
  contentPadding?: ResponsiveSpacing;
}

/**
 * SidebarLayout provides a two-column layout with a sidebar and main content
 * area. It handles responsive collapse, spacing, and can optionally support
 * collapsible sidebar behavior. Use it as a page-level layout component to
 * structure applications with navigation sidebars.
 */
export const SidebarLayout = React.forwardRef<HTMLDivElement, SidebarLayoutProps>(
  (
    {
      sidebar,
      children,
      sidebarWidth = '250px',
      gap,
      collapseAt,
      collapsible = false,
      isCollapsed = false,
      minSidebarWidth,
      contentPadding,
      style,
      className,
      ...props
    },
    ref,
  ) => {
    const gapVars = buildSpacingVars('sidebar-layout-gap', gap);
    const contentPaddingVars = buildSpacingVars('sidebar-layout-content-padding', contentPadding);

    const collapseClassMap: Record<string, string> = {
      sm: s.sidebarLayoutCollapseSm,
      md: s.sidebarLayoutCollapseMd,
      lg: s.sidebarLayoutCollapseLg,
    };

    const layoutClassName = cx(
      s.sidebarLayout,
      collapseAt && collapseClassMap[collapseAt],
      collapsible && isCollapsed && s.sidebarLayoutCollapsed,
      className,
    );

    const composedStyle: React.CSSProperties = {
      ...gapVars,
      ...(minSidebarWidth && { '--sidebar-layout-min-width': minSidebarWidth }),
      ...style,
    };

    const sidebarStyle: React.CSSProperties = {
      width: collapsible && isCollapsed ? '0' : sidebarWidth,
      minWidth: collapsible && isCollapsed ? '0' : minSidebarWidth || sidebarWidth,
      overflow: collapsible && isCollapsed ? 'hidden' : 'visible',
      transition: collapsible ? 'width 0.3s ease, min-width 0.3s ease' : undefined,
    };

    const contentStyle: React.CSSProperties = {
      ...contentPaddingVars,
    };

    return (
      <div
        ref={ref}
        className={layoutClassName}
        style={composedStyle}
        data-lyfeguard="SidebarLayout"
        data-collapse-at={collapseAt}
        data-collapsible={collapsible ? 'true' : undefined}
        data-collapsed={collapsible && isCollapsed ? 'true' : undefined}
        {...props}
      >
        <aside className={s.sidebarLayoutSidebar} style={sidebarStyle} data-lyfeguard="SidebarLayout.Sidebar">
          {sidebar}
        </aside>
        <main className={s.sidebarLayoutContent} style={contentStyle} data-lyfeguard="SidebarLayout.Content">
          {children}
        </main>
      </div>
    );
  },
);

SidebarLayout.displayName = 'SidebarLayout';

