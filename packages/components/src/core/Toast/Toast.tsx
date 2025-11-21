import React, { useEffect, useState } from 'react';
import * as s from './Toast.css';
import type { ToastVariant } from './ToastProvider';

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
  useEffect(() => {
    setInternalOpen(open);
  }, [open]);
  useEffect(() => {
    if (!internalOpen) return;
    const timeout = setTimeout(() => {
      setInternalOpen(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timeout);
  }, [internalOpen, duration, onClose]);
  if (!internalOpen) return null;
  return (
    <div className={s.container} data-lyfeguard="Toast">
      <div className={[s.toastBase, s.variants[variant]].join(' ')} role="status">
        <div className={s.message}>{children}</div>
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
          onClick={() => {
            setInternalOpen(false);
            onClose?.();
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

Toast.displayName = 'Toast';