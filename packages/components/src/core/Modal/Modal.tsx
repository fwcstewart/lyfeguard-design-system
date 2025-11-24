import React, { useEffect, useRef, useState } from 'react';
import * as s from './Modal.css';

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  open: boolean;
  /**
   * Callback fired when the overlay or backdrop is clicked
   */
  onClose: () => void;
  /**
   * Modal content
   */
  children: React.ReactNode;
  /**
   * Optional title for the modal. Used for aria-labelledby.
   */
  title?: string;
  /**
   * Optional description for the modal. Used for aria-describedby.
   */
  description?: string;
  /**
   * Optional footer content (e.g., action buttons)
   */
  footer?: React.ReactNode;
  /**
   * If true, clicking the overlay will not close the modal
   */
  disableOverlayClick?: boolean;
  /**
   * Visual variant of the modal
   * @default 'default'
   */
  variant?: 'default' | 'white' | 'dark';
  /**
   * If true, modal uses wide layout (95vw max-width)
   * @default false
   */
  wide?: boolean;
}

/**
 * Modal component with focus trap, keyboard navigation and ARIA support.
 *
 * The modal traps focus within itself when open and closes on Escape key press.
 * It includes proper ARIA attributes for screen readers, smooth animations,
 * and a refined visual design.
 */
export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  title,
  description,
  footer,
  disableOverlayClick = false,
  variant = 'default',
  wide = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const titleId = title ? `modal-title-${React.useId()}` : undefined;
  const descriptionId = description ? `modal-description-${React.useId()}` : undefined;
  const exitTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle Escape key
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  useEffect(() => () => {
    if (exitTimeoutRef.current) {
      window.clearTimeout(exitTimeoutRef.current);
    }
  }, []);

  const handleClose = () => {
    const exitDelay = prefersReducedMotion ? 0 : 200;
    setIsExiting(true);

    if (exitTimeoutRef.current) {
      window.clearTimeout(exitTimeoutRef.current);
    }

    if (exitDelay === 0) {
      onClose();
      setIsExiting(false);
      return;
    }

    exitTimeoutRef.current = window.setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, exitDelay);
  };

  // Focus trap: keep focus within the modal
  useEffect(() => {
    if (!open || !modalRef.current) return;

    // Store the previously focused element
    previousActiveElementRef.current = document.activeElement as HTMLElement;

    // Focus the modal after a brief delay to allow animation
    const timeout = window.setTimeout(() => {
      modalRef.current?.focus();
    }, prefersReducedMotion ? 0 : 100);

    // Get all focusable elements within the modal
    const getFocusableElements = (element: HTMLElement): HTMLElement[] => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');

      return Array.from(element.querySelectorAll(focusableSelectors)) as HTMLElement[];
    };

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements(modalRef.current!);
      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);

    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('keydown', handleTabKey);
      // Restore focus to the previously focused element
      previousActiveElementRef.current?.focus();
    };
  }, [open, prefersReducedMotion]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [open]);

  if (!open && !isExiting) return null;

  return (
    <div
      className={s.overlay}
      onClick={disableOverlayClick ? undefined : handleClose}
      data-lyfeguard="Modal"
      data-exiting={isExiting}
      role="presentation"
      aria-hidden={!open}
    >
      <div
        ref={modalRef}
        className={`${s.modal} ${variant === 'white' ? s.modalWhite : ''} ${variant === 'dark' ? s.modalDark : ''} ${wide ? s.modalWide : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        data-exiting={isExiting}
        data-variant={variant}
      >
        <div className={`${s.header} ${variant === 'dark' ? s.modalDarkHeader : ''}`}>
          {(title || description) && (
            <div style={{ flex: 1 }}>
              {title && (
                <h2 id={titleId} className={`${s.title} ${variant === 'dark' ? s.modalDarkTitle : ''}`}>
                  {title}
                </h2>
              )}
              {description && (
                <p id={descriptionId} className={`${s.description} ${variant === 'dark' ? s.modalDarkDescription : ''}`}>
                  {description}
                </p>
              )}
            </div>
          )}
          <button
            className={`${s.closeButton} ${variant === 'dark' ? s.modalDarkCloseButton : ''}`}
            onClick={handleClose}
            aria-label="Close modal"
            type="button"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={`${s.content} ${variant === 'dark' ? s.modalDarkContent : ''} ${wide ? s.modalWideContent : ''}`}>{children}</div>
        {footer && <div className={`${s.footer} ${variant === 'dark' ? s.modalDarkFooter : ''}`}>{footer}</div>}
      </div>
    </div>
  );
};
