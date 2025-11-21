import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

// Define a simple custom Storybook theme that aligns with the Lyfeguard brand.
// You can adjust these values later or import design tokens to theme Storybook.
const lyfeguardTheme = create({
  base: 'light',
  brandTitle: 'Lyfeguard Design System',
  brandUrl: '#',
  brandImage: undefined,
});

addons.setConfig({
  theme: lyfeguardTheme,
});