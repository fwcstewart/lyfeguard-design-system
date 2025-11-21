import React from 'react';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { vars } from '../../globals.css';

export default {
  title: 'Components/Navigation',
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

export const TopNavigation = () => (
  <div style={{ padding: vars.spacing[5], background: vars.color.theme.background }}>
    <TopNav brandName="Lyfeguard" links={links} actions={<Action />} />
  </div>
);

export const SideNavigation = () => (
  <div style={{ padding: vars.spacing[5], background: vars.color.theme.background }}>
    <Sidebar items={sidebarItems} />
  </div>
);