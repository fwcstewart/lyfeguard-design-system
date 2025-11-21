import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import * as s from './DateInput.css';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const formatDateString = (date: Date) =>
  date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const toInputValue = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const parseInputValue = (value?: string) => {
  if (!value) return undefined;
  const [year, month, day] = value.split('-').map(Number);
  const parsed = new Date(year, (month || 1) - 1, day || 1);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

export interface DateInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value' | 'defaultValue'> {
  /**
   * Label displayed above the date field
   */
  label?: string;
  /**
   * Controlled value in YYYY-MM-DD format
   */
  value?: string;
  /**
   * Default value in YYYY-MM-DD format
   */
  defaultValue?: string;
  /**
   * Callback fired when the date changes
   */
  onChange?: (value: string) => void;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

const buildCalendar = (anchor: Date): CalendarDay[] => {
  const start = new Date(anchor.getFullYear(), anchor.getMonth(), 1);
  const startWeekday = start.getDay();
  const daysInMonth = new Date(anchor.getFullYear(), anchor.getMonth() + 1, 0).getDate();

  const previousMonthDays = Array.from({ length: startWeekday }, (_, index) => {
    const day = new Date(anchor.getFullYear(), anchor.getMonth(), index * -1);
    return {
      date: day,
      isCurrentMonth: false,
    };
  }).reverse();

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, index) => ({
    date: new Date(anchor.getFullYear(), anchor.getMonth(), index + 1),
    isCurrentMonth: true,
  }));

  const total = previousMonthDays.length + currentMonthDays.length;
  const remaining = total % 7 === 0 ? 0 : 7 - (total % 7);

  const nextMonthDays = Array.from({ length: remaining }, (_, index) => ({
    date: new Date(anchor.getFullYear(), anchor.getMonth() + 1, index + 1),
    isCurrentMonth: false,
  }));

  return [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
};

/**
 * DateInput component
 *
 * Provides a styled wrapper around the native HTML5 date input. The component
 * now includes a lightweight calendar popover for accessible date selection.
 */
export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ label, value, defaultValue, onChange, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = props.id ?? generatedId;
    const controlledDate = useMemo(() => parseInputValue(value), [value]);
    const defaultDate = useMemo(() => parseInputValue(defaultValue), [defaultValue]);

    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(controlledDate || defaultDate);
    const [cursorDate, setCursorDate] = useState<Date>(selectedDate || new Date());

    const popoverRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const mergedRef = (node: HTMLInputElement) => {
      inputRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        // eslint-disable-next-line no-param-reassign
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      }
    };

    useEffect(() => {
      if (controlledDate) {
        setSelectedDate(controlledDate);
        setCursorDate(controlledDate);
      }
    }, [controlledDate]);

    useEffect(() => {
      const onClick = (event: MouseEvent) => {
        if (
          popoverRef.current &&
          !popoverRef.current.contains(event.target as Node) &&
          inputRef.current &&
          !inputRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', onClick);
      return () => document.removeEventListener('mousedown', onClick);
    }, []);

    const days = useMemo(() => buildCalendar(cursorDate), [cursorDate]);

    const handleDaySelect = (day: Date) => {
      const nextValue = toInputValue(day);
      setSelectedDate(day);
      setCursorDate(day);
      onChange?.(nextValue);
    };

    const handleInputFocus = () => {
      if (!disabled) {
        setOpen(true);
      }
    };

    const handleMonthChange = (direction: number) => {
      setCursorDate((current) => new Date(current.getFullYear(), current.getMonth() + direction, 1));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, day: Date) => {
      const keyMap: Record<string, number> = {
        ArrowRight: 1,
        ArrowLeft: -1,
        ArrowDown: 7,
        ArrowUp: -7,
      };

      if (keyMap[event.key]) {
        event.preventDefault();
        const next = new Date(day);
        next.setDate(day.getDate() + keyMap[event.key]);
        setCursorDate(next);
        requestAnimationFrame(() => {
          const target = document.querySelector<HTMLButtonElement>(
            `button[data-date="${toInputValue(next)}"]`
          );
          target?.focus();
        });
      }
    };

    const monthLabel = cursorDate.toLocaleDateString(undefined, {
      month: 'long',
      year: 'numeric',
    });

    return (
      <div className={s.wrapper} data-lyfeguard="DateInput">
        {label && (
          <label className={s.label} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className={s.inputWrapper}>
          <input
            ref={mergedRef}
            type="date"
            className={s.input}
            id={inputId}
            onFocus={handleInputFocus}
            value={selectedDate ? toInputValue(selectedDate) : value}
            defaultValue={selectedDate ? undefined : defaultValue}
            onChange={(event) => {
              const nextDate = parseInputValue(event.target.value);
              if (nextDate) {
                setSelectedDate(nextDate);
                setCursorDate(nextDate);
                onChange?.(event.target.value);
              }
            }}
            disabled={disabled}
            aria-haspopup="dialog"
            aria-expanded={open}
            {...props}
          />

          {open && !disabled && (
            <div role="dialog" aria-label="Calendar" className={s.popover} ref={popoverRef}>
              <div className={s.calendarHeader}>
                <button type="button" className={s.navButton} onClick={() => handleMonthChange(-1)} aria-label="Previous month">
                  ←
                </button>
                <span aria-live="polite">{monthLabel}</span>
                <button type="button" className={s.navButton} onClick={() => handleMonthChange(1)} aria-label="Next month">
                  →
                </button>
              </div>

              <div className={s.dayGrid} aria-label="Weekday headings">
                {WEEKDAYS.map((day) => (
                  <div key={day} className={s.weekday} aria-hidden>
                    {day}
                  </div>
                ))}
                {days.map(({ date, isCurrentMonth }) => {
                  const valueString = toInputValue(date);
                  const isSelected = selectedDate && valueString === toInputValue(selectedDate);
                  const dayState: keyof typeof s.day = disabled
                    ? 'disabled'
                    : isSelected
                      ? 'selected'
                      : isCurrentMonth
                        ? 'default'
                        : 'range';

                  return (
                    <button
                      key={valueString}
                      type="button"
                      data-date={valueString}
                      className={s.day[dayState]}
                      onClick={() => handleDaySelect(date)}
                      onKeyDown={(event) => handleKeyDown(event, date)}
                      aria-label={formatDateString(date)}
                      disabled={disabled}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

DateInput.displayName = 'DateInput';
