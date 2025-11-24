import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Layout.css';
import { buildSpacingVars, defaultSpacing, ResponsiveSpacing } from './spacing';

export interface ClusterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Gap between cluster items using semantic spacing tokens. Supports
   * responsive values keyed by breakpoint (sm, md, lg, xl, xxl, widescreen).
   */
  gap?: ResponsiveSpacing;
  /**
   * Control horizontal alignment of items within the cluster.
   */
  align?: 'start' | 'center' | 'end';
  /**
   * Control vertical alignment of items within the cluster.
   */
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * If true, items will wrap to multiple lines when space is limited.
   * Defaults to true.
   */
  wrap?: boolean;
}

/**
 * Cluster groups items horizontally with consistent spacing and automatic
 * wrapping. It's ideal for tags, badges, buttons, or any inline content
 * that should flow naturally and wrap when needed. The gap prop controls
 * spacing between items using design tokens.
 */
export const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(
  (
    {
      gap = defaultSpacing,
      align = 'start',
      justify = 'start',
      wrap = true,
      style,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const gapVars = buildSpacingVars('cluster-gap', gap, defaultSpacing);

    const clusterClassName = cx(s.cluster, className);

    const composedStyle: React.CSSProperties = {
      alignItems: align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : 'center',
      justifyContent:
        justify === 'start'
          ? 'flex-start'
          : justify === 'end'
            ? 'flex-end'
            : justify === 'space-between'
              ? 'space-between'
              : justify === 'space-around'
                ? 'space-around'
                : justify === 'space-evenly'
                  ? 'space-evenly'
                  : 'center',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      ...gapVars,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={clusterClassName}
        style={composedStyle}
        data-lyfeguard="Cluster"
        data-wrap={wrap ? 'true' : undefined}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Cluster.displayName = 'Cluster';

