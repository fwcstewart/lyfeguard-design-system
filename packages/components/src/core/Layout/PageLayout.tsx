import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Layout.css';
import { buildSpacingVars, ResponsiveSpacing } from './spacing';

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content to render in the header area (typically TopNav component).
   */
  header?: React.ReactNode;
  /**
   * Content to render in the sidebar area (typically Sidebar component).
   */
  sidebar?: React.ReactNode;
  /**
   * Content to render in the main content area.
   */
  children: React.ReactNode;
  /**
   * Content to render in the footer area.
   */
  footer?: React.ReactNode;
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
  /**
   * If true, the layout takes full viewport height. Defaults to true.
   */
  fullHeight?: boolean;
  /**
   * If true, the header is sticky and remains visible when scrolling. Defaults to false.
   */
  stickyHeader?: boolean;
  /**
   * If true, the footer is sticky and remains visible at the bottom. Defaults to false.
   */
  stickyFooter?: boolean;
}

/**
 * PageLayout provides a complete page structure with header, sidebar, main content,
 * and optional footer regions. It's designed to work seamlessly with TopNav and
 * Sidebar components and handles responsive collapse, full-height layouts, and
 * sticky positioning. Use it as the root layout component for your application.
 */
export const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  (
    {
      header,
      sidebar,
      children,
      footer,
      sidebarWidth = '250px',
      gap,
      collapseAt,
      collapsible = false,
      isCollapsed = false,
      minSidebarWidth,
      contentPadding,
      fullHeight = true,
      stickyHeader = false,
      stickyFooter = false,
      style,
      className,
      ...props
    },
    ref,
  ) => {
    const gapVars = buildSpacingVars('page-layout-gap', gap);
    const contentPaddingVars = buildSpacingVars('page-layout-content-padding', contentPadding);

    const collapseClassMap: Record<string, string> = {
      sm: s.pageLayoutCollapseSm,
      md: s.pageLayoutCollapseMd,
      lg: s.pageLayoutCollapseLg,
    };

    const layoutClassName = cx(
      s.pageLayout,
      fullHeight && s.pageLayoutFullHeight,
      collapseAt && collapseClassMap[collapseAt],
      collapsible && isCollapsed && s.pageLayoutCollapsed,
      className,
    );

    const composedStyle: React.CSSProperties = {
      ...gapVars,
      ...(minSidebarWidth && { '--page-layout-min-sidebar-width': minSidebarWidth }),
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

    const headerClassName = cx(s.pageLayoutHeader, stickyHeader && s.pageLayoutHeaderSticky);
    const footerClassName = cx(s.pageLayoutFooter, stickyFooter && s.pageLayoutFooterSticky);

    return (
      <div
        ref={ref}
        className={layoutClassName}
        style={composedStyle}
        data-lyfeguard="PageLayout"
        data-collapse-at={collapseAt}
        data-collapsible={collapsible ? 'true' : undefined}
        data-collapsed={collapsible && isCollapsed ? 'true' : undefined}
        data-full-height={fullHeight ? 'true' : undefined}
        {...props}
      >
        {header && (
          <header className={headerClassName} data-lyfeguard="PageLayout.Header">
            {header}
          </header>
        )}
        <div className={s.pageLayoutBody} data-lyfeguard="PageLayout.Body">
          {sidebar && (
            <aside className={s.pageLayoutSidebar} style={sidebarStyle} data-lyfeguard="PageLayout.Sidebar">
              {sidebar}
            </aside>
          )}
          <main className={s.pageLayoutContent} style={contentStyle} data-lyfeguard="PageLayout.Content">
            {children}
          </main>
        </div>
        {footer && (
          <footer className={footerClassName} data-lyfeguard="PageLayout.Footer">
            {footer}
          </footer>
        )}
      </div>
    );
  },
);

PageLayout.displayName = 'PageLayout';

