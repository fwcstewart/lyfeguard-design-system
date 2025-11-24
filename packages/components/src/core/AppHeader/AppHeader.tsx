import React from 'react';
import { Dropdown, DropdownItem } from '../Dropdown/Dropdown';
import { Avatar } from '../Avatar/Avatar';
import * as s from './AppHeader.css';

export interface AppHeaderProps {
  /**
   * Logo or brand element to display on the left.
   */
  logo?: React.ReactNode;
  /**
   * URL for the logo link.
   */
  logoHref?: string;
  /**
   * Notifications icon click handler.
   */
  onNotificationsClick?: () => void;
  /**
   * User's name to display in the profile dropdown.
   */
  userName: string;
  /**
   * User's avatar image URL.
   */
  userAvatar?: string;
  /**
   * Profile dropdown menu items.
   */
  profileMenuItems: DropdownItem[];
  /**
   * Mobile menu button click handler.
   */
  onMobileMenuClick?: () => void;
  /**
   * Whether to show mobile menu button.
   */
  showMobileMenu?: boolean;
}

/**
 * Application header component with logo, notifications, and profile dropdown.
 * Designed for use in the main application layout.
 */
export const AppHeader: React.FC<AppHeaderProps> = ({
  logo,
  logoHref = '#',
  onNotificationsClick,
  userName,
  userAvatar,
  profileMenuItems,
  onMobileMenuClick,
  showMobileMenu = false,
}) => {
  return (
    <header className={s.header} data-lyfeguard="AppHeader">
      <div className={s.container}>
        <div className={s.left}>
          <a href={logoHref} className={s.logoLink}>
            {logo || <span className={s.logoText}>Lyfeguard</span>}
          </a>
        </div>
        <div className={s.right}>
          {onNotificationsClick && (
            <button
              type="button"
              className={s.notificationButton}
              onClick={onNotificationsClick}
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined">chat_bubble_outline</span>
            </button>
          )}
          <div className={s.desktopProfile}>
            <Dropdown
              trigger={
                <button type="button" className={s.profileTrigger} aria-label="User menu">
                  <Avatar name={userName} src={userAvatar} size={64} />
                  <span className={s.userName}>{userName}</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>
                    expand_more
                  </span>
                </button>
              }
              items={profileMenuItems}
              align="right"
            />
          </div>
          {showMobileMenu && (
            <button
              type="button"
              className={s.mobileMenuButton}
              onClick={onMobileMenuClick}
              aria-label="Open menu"
            >
              <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="36" y2="1" stroke="currentColor" strokeWidth="2" />
                <line x1="10" y1="11" x2="36" y2="11" stroke="currentColor" strokeWidth="2" />
                <line y1="21" x2="36" y2="21" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

AppHeader.displayName = 'AppHeader';

