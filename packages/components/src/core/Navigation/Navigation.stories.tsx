import React from 'react';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { vars } from '../../globals.css';

export default {
  title: 'Core/Navigation',
};

const links = [
  { label: 'Dashboard', href: '#', isActive: true },
  { label: 'Documents', href: '#' },
  { label: 'Contacts', href: '#' },
];

const sidebarItems = [
  { label: 'Dashboard' },
  { label: 'Documents' },
  { label: 'Contacts' },
];

const Action = () => (
  <button style={{ background: 'none', border: 'none', color: vars.color.theme.text.primary }} type="button">
    User
  </button>
);

export const TopNavigationLight = () => <TopNav brandName="Lyfeguard" links={links} actions={<Action />} />;

export const TopNavigationDark = () => (
  <div className="dark" style={{ padding: vars.spacing[5], background: vars.color.theme.background }}>
    <TopNav brandName="Lyfeguard" links={links} actions={<Action />} />
  </div>
);

export const SideNavigationLight = () => <Sidebar items={sidebarItems} />;

export const SideNavigationDark = () => (
  <div className="dark" style={{ padding: vars.spacing[5], background: vars.color.theme.background }}>
    <Sidebar items={sidebarItems} />
  </div>
);