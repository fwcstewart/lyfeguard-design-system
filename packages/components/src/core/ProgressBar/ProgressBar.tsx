import React from 'react';
import * as s from './ProgressBar.css';

export type ProgressBarSize = 'sm' | 'md' | 'lg';

export interface ProgressBarProps {
  /**
   * Current progress percentage, between 0 and 100
   */
  progress: number;
  /**
   * Optional label displayed above the bar for context
   */
  label?: string;
  /**
   * Size token controlling height and typography
   */
  size?: ProgressBarSize;
}

/**
 * ProgressBar component
 *
 * Displays a horizontal bar indicating completion percentage. The width of
 * the filled section is animated for smooth updates. The bar uses the
 * brand colour for the fill and a neutral background for the track.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  size = 'md',
}) => {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className={s.container} data-lyfeguard="ProgressBar">
      <div className={s.labels}>
        <span>{label ?? 'Progress'}</span>
        <span className={s.value}>{`${clamped}%`}</span>
      </div>
      <div
        className={`${s.bar} ${s.sizes[size]}`}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={s.fill} style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
};