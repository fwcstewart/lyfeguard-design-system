// @ts-check
// Docusaurus configuration for the Lyfeguard design system documentation.

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: 'Lyfeguard Design System',
  tagline: 'Documentation',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Lyfeguard',
  projectName: 'design-system',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;