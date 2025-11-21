import React from 'react';
import * as s from './ProgressBar.css';

export interface ProgressBarProps {
  /**
   * Current progress percentage, between 0 and 100
   */
  progress: number;
  /**
   * Optional height of the bar in pixels
   */
  height?: number;
}

/**
 * ProgressBar component
 *
 * Displays a horizontal bar indicating completion percentage. The width of
 * the filled section is animated for smooth updates. The bar uses the
 * brand colour for the fill and a neutral background for the track.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height = 8 }) => {
  const clamped = Math.min(100, Math.max(0, progress));
  return (
    <div className={s.bar} style={{ height }}>
      <div className={s.fill} style={{ width: `${clamped}%` }} />
    </div>
  );
};