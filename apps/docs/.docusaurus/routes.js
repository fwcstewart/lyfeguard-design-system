import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '390'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '215'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b99'),
            routes: [
              {
                path: '/docs/components/components-overview',
                component: ComponentCreator('/docs/components/components-overview', '1f3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/development/development-overview',
                component: ComponentCreator('/docs/development/development-overview', '059'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/development/theming-token-hardening',
                component: ComponentCreator('/docs/development/theming-token-hardening', '198'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/foundations/foundations-overview',
                component: ComponentCreator('/docs/foundations/foundations-overview', '613'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/governance/governance-overview',
                component: ComponentCreator('/docs/governance/governance-overview', 'f91'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/patterns/patterns-overview',
                component: ComponentCreator('/docs/patterns/patterns-overview', '7a4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tokens/tokens-overview',
                component: ComponentCreator('/docs/tokens/tokens-overview', '8d9'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
