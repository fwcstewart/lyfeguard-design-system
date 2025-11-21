import React, { useEffect, useState } from 'react';
import * as s from './Toast.css';
import { ToastVariant } from './ToastProvider';

export interface ToastItemProps {
  id: string;
  variant: ToastVariant;
  duration: number;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * Internal component for rendering individual toast items.
 * Handles auto-dismiss and close button interactions with smooth animations.
 */
export const ToastItem: React.FC<ToastItemProps> = ({
  variant,
  duration,
  onClose,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration === 0) return; // No auto-dismiss

    const timeout = setTimeout(() => {
      setIsExiting(true);
      setIsVisible(false);
      // Wait for exit animation before calling onClose
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsExiting(true);
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={[s.toastBase, s.variants[variant]].join(' ')}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      data-lyfeguard="Toast"
      data-exiting={isExiting}
    >
      <div className={s.message}>{children}</div>
      <button
        className={s.closeButton}
        onClick={handleClose}
        aria-label="Close notification"
        type="button"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

