import React from 'react';
import { cx } from '../../../helpers/cx';
import * as s from './ProgressSummary.css';

export type ProgressTone = 'info' | 'success' | 'warning' | 'error';

export interface ProgressSummaryItem {
  /**
   * Unique identifier for the row. Used when handling click events.
   */
  id: string;
  /**
   * User-facing label for the progress item.
   */
  label: string;
  /**
   * Completion percentage, between 0 and 100.
   */
  progress: number;
  /**
   * Optional helper copy rendered beneath the label.
   */
  helperText?: string;
  /**
   * Adjusts the fill colour to match semantic meaning.
   */
  tone?: ProgressTone;
  /**
   * Value displayed to the right of the label (e.g. raw counts).
   */
  valueLabel?: string;
}

export interface ProgressSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Heading shown above the list of items.
   */
  heading?: string;
  /**
   * List of progress items to render.
   */
  items: ProgressSummaryItem[];
  /**
   * Optional click handler to make rows interactive.
   */
  onItemClick?(id: string): void;
}

/**
 * Displays a vertical stack of labelled progress bars, ideal for dashboard sidebars
 * or drill-down views where multiple KPIs need compact visualisation.
 */
export const ProgressSummary: React.FC<ProgressSummaryProps> = ({
  heading,
  items,
  onItemClick,
  className,
  ...props
}) => (
  <div className={cx(s.wrapper, className)} data-lyfeguard="ProgressSummary" {...props}>
    {heading && <div className={s.heading}>{heading}</div>}
    <div className={s.list}>
      {items.map((item) => {
        const clamped = Math.min(100, Math.max(0, item.progress));
        const tone = item.tone ?? 'info';

        const handleClick = () => {
          onItemClick?.(item.id);
        };

        return (
          <div
            key={item.id}
            className={cx(s.item, onItemClick && s.itemInteractive)}
            role={onItemClick ? 'button' : undefined}
            tabIndex={onItemClick ? 0 : undefined}
            onClick={onItemClick ? handleClick : undefined}
            onKeyDown={onItemClick ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleClick();
              }
            } : undefined}
          >
            <div className={s.itemHeader}>
              <span className={s.label}>{item.label}</span>
              <span className={s.value}>{item.valueLabel ?? `${clamped}%`}</span>
            </div>
            {item.helperText && <div className={s.helper}>{item.helperText}</div>}
            <div className={s.track} role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
              <div className={cx(s.bar, s.fill[tone])} style={{ width: `${clamped}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
