import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Filters.css';

export interface FilterOption {
  /**
   * Unique identifier for the filter pill.
   */
  id: string;
  /**
   * Display label shown to the user.
   */
  label: string;
  /**
   * Optional helper text shown beneath the label.
   */
  helperText?: string;
  /**
   * Optional badge count rendered on the pill.
   */
  count?: number;
  /**
   * Prevent interaction when true.
   */
  disabled?: boolean;
}

export interface FiltersProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Available filter options.
   */
  options: FilterOption[];
  /**
   * Controlled list of selected option ids.
   */
  selected?: string[];
  /**
   * Initial selection for uncontrolled usage.
   */
  defaultSelected?: string[];
  /**
   * Allow choosing more than one option. Defaults to true.
   */
  allowMultiple?: boolean;
  /**
   * Called whenever the selection changes.
   */
  onChange?(nextSelected: string[]): void;
  /**
   * Label displayed above the filter pills.
   */
  label?: string;
  /**
   * Label for the clear selection button.
   */
  clearLabel?: string;
}

/**
 * Interactive filter pills that support single or multi-select behaviour with
 * optional helper text and counts. Designed for toolbar or page-level filter
 * bars where clarity and touch targets matter.
 */
export const Filters: React.FC<FiltersProps> = ({
  options,
  selected,
  defaultSelected = [],
  allowMultiple = true,
  onChange,
  label,
  clearLabel = 'Clear',
  className,
  ...props
}) => {
  const [internalSelected, setInternalSelected] = React.useState<string[]>(defaultSelected);
  const resolvedSelected = selected ?? internalSelected;
  const showHeader = Boolean(label || clearLabel);

  const handleToggle = (id: string, disabled?: boolean) => {
    if (disabled) return;

    setInternalSelected((prev) => {
      const current = selected ?? prev;
      const isSelected = current.includes(id);
      let next: string[];

      if (isSelected) {
        next = current.filter((value) => value !== id);
      } else if (allowMultiple) {
        next = [...current, id];
      } else {
        next = [id];
      }

      onChange?.(next);
      return selected ? prev : next;
    });
  };

  const handleClear = () => {
    onChange?.([]);
    if (!selected) {
      setInternalSelected([]);
    }
  };

  return (
    <div className={cx(s.wrapper, className)} data-lyfeguard="Filters" {...props}>
      {showHeader && (
        <div className={s.header}>
          {label && <span className={s.label}>{label}</span>}
          {clearLabel && (
            <div className={s.actions}>
              <button
                type="button"
                className={s.action}
                onClick={handleClear}
                disabled={resolvedSelected.length === 0}
              >
                {clearLabel}
              </button>
            </div>
          )}
        </div>
      )}
      <ul className={s.list} role="list">
        {options.map((option) => {
          const isSelected = resolvedSelected.includes(option.id);

          return (
            <li key={option.id}>
              <button
                type="button"
                className={cx(s.filter, isSelected && s.selected)}
                aria-pressed={isSelected}
                onClick={() => handleToggle(option.id, option.disabled)}
                disabled={option.disabled}
              >
                <span className={s.label}>{option.label}</span>
                {typeof option.count === 'number' && <span className={s.badge}>{option.count}</span>}
                {option.helperText && <span className={s.helper}>{option.helperText}</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
