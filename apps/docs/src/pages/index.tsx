import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

/**
 * Home page for the Lyfeguard Design System docs.
 *
 * This simple landing page introduces the design system and links
 * visitors to the Introduction page.  It uses Docusaurus
 * components to ensure consistent styling.
 */
export default function Home(): JSX.Element {
  return (
    <Layout title="Welcome" description="Lyfeguard design system documentation home page">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to the Lyfeguard Design System</h1>
        <p>
          Explore our tokens, foundations and components to build
          accessible, consistent user experiences across Lyfeguard
          products.
        </p>
        <p>
          <Link className="button button--primary button--lg" to="/docs/foundations/overview">
            Get Started
          </Link>
        </p>
      </main>
    </Layout>
  );
}