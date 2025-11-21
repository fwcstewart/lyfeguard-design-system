import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '176'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '37c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '477'),
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
