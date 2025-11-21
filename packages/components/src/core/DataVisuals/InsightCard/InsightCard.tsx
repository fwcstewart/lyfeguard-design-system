import React from 'react';
import { cx } from '../../../helpers/cx';
import * as s from './InsightCard.css';

export type InsightTone = 'positive' | 'negative' | 'neutral';

export interface InsightTrend {
  /**
   * Label describing what the change compares against.
   */
  label?: string;
  /**
   * Human-readable change (e.g. "+12.4%" or "-3 users").
   */
  value: string;
  /**
   * Visual tone for the change state.
   */
  tone?: InsightTone;
}

export interface InsightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Primary title describing the metric.
   */
  title: string;
  /**
   * Main value to display. Provide a preformatted string for currency or percentages.
   */
  value: string;
  /**
   * Optional secondary value or delta shown beside the main value.
   */
  secondaryValue?: string;
  /**
   * Short description to add extra context beneath the title.
   */
  description?: string;
  /**
   * Optional visual element placed to the left of the title.
   */
  icon?: React.ReactNode;
  /**
   * Copy displayed in the footer for additional context.
   */
  helperText?: string;
  /**
   * Text aligned to the right of the footer, often used for timestamps.
   */
  meta?: string;
  /**
   * Change indicator shown under the value row.
   */
  trend?: InsightTrend;
  /**
   * Optional progress indicator. Provide a value between 0 and 100 to render a subtle progress bar.
   */
  progress?: number;
  /**
   * Label used beside the progress indicator.
   */
  progressLabel?: string;
  /**
   * Slot for inline actions such as buttons or menus.
   */
  actions?: React.ReactNode;
}

/**
 * InsightCard surfaces a single KPI alongside supporting metadata like trends,
 * progress, and helper content. Designed for dashboards that need quick, scannable
 * insights without overwhelming visual noise.
 */
export const InsightCard: React.FC<InsightCardProps> = ({
  title,
  value,
  secondaryValue,
  description,
  icon,
  helperText,
  meta,
  trend,
  progress,
  progressLabel = 'Progress',
  actions,
  className,
  ...props
}) => {
  const clampedProgress = typeof progress === 'number' ? Math.min(100, Math.max(0, progress)) : undefined;
  const tone = trend?.tone ?? 'neutral';

  return (
    <div className={cx(s.card, className)} data-lyfeguard="InsightCard" {...props}>
      <div className={s.header}>
        <div className={s.titleGroup}>
          {icon && <span className={s.icon} aria-hidden>{icon}</span>}
          <div>
            <div className={s.title}>{title}</div>
            {description && <div className={s.description}>{description}</div>}
          </div>
        </div>
        {actions && <div className={s.actions}>{actions}</div>}
      </div>

      <div className={s.valueRow}>
        <span className={s.value}>{value}</span>
        {secondaryValue && <span className={s.secondary}>{secondaryValue}</span>}
      </div>

      {trend?.value && (
        <div className={cx(s.trend, s.trendTone[tone])}>
          <span className={cx(s.dot, s.dotTone[tone])} aria-hidden />
          <span>{trend.value}</span>
          {trend.label && <span className={s.trendLabel}>{trend.label}</span>}
        </div>
      )}

      {typeof clampedProgress === 'number' && (
        <div className={s.progress}>
          <div className={s.progressHeader}>
            <span>{progressLabel}</span>
            <span>{`${clampedProgress}%`}</span>
          </div>
          <div className={s.progressTrack} role="progressbar" aria-valuenow={clampedProgress} aria-valuemin={0} aria-valuemax={100}>
            <div className={s.progressFill} style={{ width: `${clampedProgress}%` }} />
          </div>
        </div>
      )}

      {(helperText || meta) && (
        <div className={s.footer}>
          {helperText ? <span className={s.helper}>{helperText}</span> : <span />}
          {meta && <span>{meta}</span>}
        </div>
      )}
    </div>
  );
};
