import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Layout.css';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The aspect ratio to maintain, expressed as width/height. Common values:
   * - `1` for square (1:1)
   * - `16/9` for widescreen video
   * - `4/3` for traditional displays
   * - `3/2` for photography
   */
  ratio: number;
  /**
   * If true, the container will fit the content's natural aspect ratio
   * instead of forcing the specified ratio. Useful for responsive images.
   */
  fit?: 'contain' | 'cover';
}

/**
 * AspectRatio maintains a consistent aspect ratio for its content, useful
 * for images, videos, cards and other media. The container will scale
 * proportionally while preserving the specified ratio across different
 * screen sizes.
 */
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio, fit = 'cover', style, className, children, ...props }, ref) => {
    const aspectRatioStyle: React.CSSProperties = {
      aspectRatio: ratio.toString(),
      ...style,
    };

    const aspectRatioClassName = cx(s.aspectRatio, fit === 'contain' && s.aspectRatioContain, className);

    return (
      <div
        ref={ref}
        className={aspectRatioClassName}
        style={aspectRatioStyle}
        data-lyfeguard="AspectRatio"
        data-ratio={ratio}
        data-fit={fit}
        {...props}
      >
        {children}
      </div>
    );
  },
);

AspectRatio.displayName = 'AspectRatio';

