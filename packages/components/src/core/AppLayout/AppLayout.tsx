import React, { useState, useEffect } from 'react';
import { AppHeader, AppHeaderProps } from '../AppHeader/AppHeader';
import { AppSidebar, AppSidebarProps } from '../AppSidebar/AppSidebar';
import { Stack } from '../Layout/Stack';
import * as s from './AppLayout.css';

export interface AppLayoutProps {
  /**
   * Props for the AppHeader component.
   */
  headerProps: AppHeaderProps;
  /**
   * Props for the AppSidebar component.
   */
  sidebarProps: AppSidebarProps;
  /**
   * Main content to display in the layout.
   */
  children: React.ReactNode;
  /**
   * Breakpoint at which the sidebar should collapse on mobile.
   */
  collapseAt?: 'sm' | 'md' | 'lg';
}

/**
 * Application layout component that combines AppHeader, AppSidebar, and main content.
 * Handles responsive sidebar collapse and mobile menu state.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
  headerProps,
  sidebarProps,
  children,
  collapseAt = 'lg',
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const breakpoint = collapseAt === 'sm' ? 640 : collapseAt === 'md' ? 768 : 1024;
      if (window.innerWidth < breakpoint) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [collapseAt]);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    headerProps.onMobileMenuClick?.();
  };

  return (
    <div className={s.layout} data-lyfeguard="AppLayout">
      <AppHeader
        {...headerProps}
        showMobileMenu={sidebarCollapsed}
        onMobileMenuClick={handleMobileMenuClick}
      />
      <div className={s.body}>
        <AppSidebar
          {...sidebarProps}
          collapsed={!mobileMenuOpen && sidebarCollapsed}
        />
        <main className={s.main} data-sidebar-collapsed={sidebarCollapsed}>
          <Stack gap="none" style={{ height: '100%', overflowY: 'auto', width: '100%', minWidth: 0 }}>
            {children}
          </Stack>
        </main>
      </div>
    </div>
  );
};

AppLayout.displayName = 'AppLayout';

