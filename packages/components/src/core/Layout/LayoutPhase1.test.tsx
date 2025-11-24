import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { AspectRatio } from './AspectRatio';
import { Center } from './Center';
import { Cluster } from './Cluster';
import { Section } from './Section';
import { spacingTokens } from './spacing';

describe('Section', () => {
  it('renders as a section element by default', () => {
    render(<Section data-testid="section">Content</Section>);
    const section = screen.getByTestId('section');
    expect(section.tagName).toBe('SECTION');
    expect(section.getAttribute('data-lyfeguard')).toBe('Section');
  });

  it('renders as a custom element when as prop is provided', () => {
    render(
      <Section as="div" data-testid="section">
        Content
      </Section>,
    );
    const section = screen.getByTestId('section');
    expect(section.tagName).toBe('DIV');
  });

  it('applies responsive spacing variables', () => {
    render(
      <Section data-testid="section" spacing={{ base: 'sm', lg: 'xl' }}>
        Content
      </Section>,
    );
    const section = screen.getByTestId('section');
    expect(section.style.getPropertyValue('--section-spacing')).toBe(spacingTokens.sm);
    expect(section.style.getPropertyValue('--section-spacing-lg')).toBe(spacingTokens.xl);
  });

  it('applies responsive padding variables', () => {
    render(
      <Section data-testid="section" padding={{ base: 'md', xl: '2xl' }}>
        Content
      </Section>,
    );
    const section = screen.getByTestId('section');
    expect(section.style.getPropertyValue('--section-padding')).toBe(spacingTokens.md);
    expect(section.style.getPropertyValue('--section-padding-xl')).toBe(spacingTokens['2xl']);
  });

  it('applies divider class when divider prop is true', () => {
    render(
      <Section data-testid="section" divider>
        Content
      </Section>,
    );
    const section = screen.getByTestId('section');
    expect(section.getAttribute('data-divider')).toBe('true');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLElement>();
    render(<Section ref={ref}>Content</Section>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe('SECTION');
  });
});

describe('AspectRatio', () => {
  it('renders with correct aspect ratio', () => {
    render(
      <AspectRatio data-testid="aspect-ratio" ratio={16 / 9}>
        Content
      </AspectRatio>,
    );
    const aspectRatio = screen.getByTestId('aspect-ratio');
    expect(aspectRatio.style.aspectRatio).toBe('1.7777777777777777');
    expect(aspectRatio.getAttribute('data-lyfeguard')).toBe('AspectRatio');
    expect(aspectRatio.getAttribute('data-ratio')).toBe('1.7777777777777777');
  });

  it('applies cover fit by default', () => {
    render(
      <AspectRatio data-testid="aspect-ratio" ratio={1}>
        Content
      </AspectRatio>,
    );
    const aspectRatio = screen.getByTestId('aspect-ratio');
    expect(aspectRatio.getAttribute('data-fit')).toBe('cover');
  });

  it('applies contain fit when specified', () => {
    render(
      <AspectRatio data-testid="aspect-ratio" ratio={1} fit="contain">
        Content
      </AspectRatio>,
    );
    const aspectRatio = screen.getByTestId('aspect-ratio');
    expect(aspectRatio.getAttribute('data-fit')).toBe('contain');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <AspectRatio ref={ref} ratio={16 / 9}>
        Content
      </AspectRatio>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('Center', () => {
  it('renders with correct data attribute', () => {
    render(<Center data-testid="center">Content</Center>);
    const center = screen.getByTestId('center');
    expect(center.getAttribute('data-lyfeguard')).toBe('Center');
  });

  it('applies maxWidth when provided', () => {
    render(
      <Center data-testid="center" maxWidth="600px">
        Content
      </Center>,
    );
    const center = screen.getByTestId('center');
    expect(center.style.maxWidth).toBe('600px');
  });

  it('applies responsive padding variables', () => {
    render(
      <Center data-testid="center" padding={{ base: 'md', lg: 'xl' }}>
        Content
      </Center>,
    );
    const center = screen.getByTestId('center');
    expect(center.style.getPropertyValue('--center-padding')).toBe(spacingTokens.md);
    expect(center.style.getPropertyValue('--center-padding-lg')).toBe(spacingTokens.xl);
  });

  it('applies andText class when andText prop is true', () => {
    render(
      <Center data-testid="center" andText>
        Content
      </Center>,
    );
    const center = screen.getByTestId('center');
    expect(center.getAttribute('data-and-text')).toBe('true');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Center ref={ref}>Content</Center>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('Cluster', () => {
  it('renders with correct data attribute', () => {
    render(<Cluster data-testid="cluster">Content</Cluster>);
    const cluster = screen.getByTestId('cluster');
    expect(cluster.getAttribute('data-lyfeguard')).toBe('Cluster');
  });

  it('applies responsive gap variables', () => {
    render(
      <Cluster data-testid="cluster" gap={{ base: 'sm', md: 'lg' }}>
        Content
      </Cluster>,
    );
    const cluster = screen.getByTestId('cluster');
    expect(cluster.style.getPropertyValue('--cluster-gap')).toBe(spacingTokens.sm);
    expect(cluster.style.getPropertyValue('--cluster-gap-md')).toBe(spacingTokens.lg);
  });

  it('applies default gap when not provided', () => {
    render(<Cluster data-testid="cluster">Content</Cluster>);
    const cluster = screen.getByTestId('cluster');
    expect(cluster.style.getPropertyValue('--cluster-gap')).toBe(spacingTokens.md);
  });

  it('applies correct alignment styles', () => {
    const { rerender } = render(
      <Cluster data-testid="cluster" align="start" justify="start">
        Content
      </Cluster>,
    );
    let cluster = screen.getByTestId('cluster');
    expect(cluster.style.alignItems).toBe('flex-start');
    expect(cluster.style.justifyContent).toBe('flex-start');

    rerender(
      <Cluster data-testid="cluster" align="center" justify="center">
        Content
      </Cluster>,
    );
    cluster = screen.getByTestId('cluster');
    expect(cluster.style.alignItems).toBe('center');
    expect(cluster.style.justifyContent).toBe('center');

    rerender(
      <Cluster data-testid="cluster" align="end" justify="space-between">
        Content
      </Cluster>,
    );
    cluster = screen.getByTestId('cluster');
    expect(cluster.style.alignItems).toBe('flex-end');
    expect(cluster.style.justifyContent).toBe('space-between');
  });

  it('applies wrap by default', () => {
    render(<Cluster data-testid="cluster">Content</Cluster>);
    const cluster = screen.getByTestId('cluster');
    expect(cluster.style.flexWrap).toBe('wrap');
    expect(cluster.getAttribute('data-wrap')).toBe('true');
  });

  it('applies nowrap when wrap is false', () => {
    render(
      <Cluster data-testid="cluster" wrap={false}>
        Content
      </Cluster>,
    );
    const cluster = screen.getByTestId('cluster');
    expect(cluster.style.flexWrap).toBe('nowrap');
    expect(cluster.getAttribute('data-wrap')).toBeNull();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Cluster ref={ref}>Content</Cluster>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

