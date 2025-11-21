import React from 'react';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';

export default {
  title: 'Core/Navigation',
};

export const TopNavigation = () => (
  <TopNav
    brandName="Lyfeguard"
    links={[
      { label: 'Dashboard', href: '#' },
      { label: 'Documents', href: '#' },
      { label: 'Contacts', href: '#' },
    ]}
    actions={<button style={{ background: 'none', border: 'none', color: 'white' }}>User</button>}
  />
);

export const SideNavigation = () => (
  <Sidebar
    items={[
      { label: 'Dashboard' },
      { label: 'Documents' },
      { label: 'Contacts' },
    ]}
  />
);