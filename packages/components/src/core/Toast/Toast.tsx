import React, { useEffect, useState } from 'react';
import * as s from './Toast.css';
import type { ToastVariant } from './types';
import { ToastContent } from './ToastItem';

export interface ToastProps {
  /**
   * Controls whether the toast is visible.
   */
  open: boolean;
  /**
   * Callback fired when the toast requests to close. Use this to update the
   * `open` prop in the parent.
   */
  onClose: () => void;
  /**
   * Message content for the toast. Can be any React node.
   */
  children: React.ReactNode;
  /**
   * Visual variant for the toast. Determines colours.
   */
  variant?: ToastVariant;
  /**
   * Optional auto-dismiss timeout in milliseconds. Defaults to 5000ms.
   */
  duration?: number;
}

/**
 * Toast notifications appear in the bottom right of the viewport. They can
 * automatically dismiss after a duration or be manually closed via the
 * onClose callback.
 */
export const Toast: React.FC<ToastProps> = ({ open, onClose, children, variant = 'info', duration = 5000 }) => {
  const [internalOpen, setInternalOpen] = useState(open);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (open) {
      setInternalOpen(true);
      setIsExiting(false);
      return;
    }

    if (internalOpen) {
      setIsExiting(true);
      const timeout = setTimeout(() => setInternalOpen(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open, internalOpen]);

  useEffect(() => {
    if (!internalOpen || duration === 0) return;
    const timeout = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setInternalOpen(false);
        onClose?.();
      }, 300);
    }, duration);
    return () => clearTimeout(timeout);
  }, [internalOpen, duration, onClose]);

  if (!internalOpen) return null;
  return (
    <div className={s.container} data-lyfeguard="Toast">
      <ToastContent
        variant={variant}
        onClose={() => {
          setIsExiting(true);
          setTimeout(() => {
            setInternalOpen(false);
            onClose?.();
          }, 300);
        }}
        isExiting={isExiting}
      >
        {children}
      </ToastContent>
    </div>
  );
};

Toast.displayName = 'Toast';