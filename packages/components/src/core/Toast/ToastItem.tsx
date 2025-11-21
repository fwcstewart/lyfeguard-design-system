import React, { useEffect, useState } from 'react';
import { CheckIcon, CloseIcon, InfoIcon, WarningIcon } from '@lyfeguard/icons';
import * as s from './Toast.css';
import { ToastVariant } from './types';

export interface ToastContentProps {
  variant: ToastVariant;
  onClose: () => void;
  children: React.ReactNode;
  isExiting?: boolean;
}

const variantIcons: Record<ToastVariant, React.ReactNode> = {
  info: <InfoIcon size={18} aria-hidden="true" />,
  success: <CheckIcon size={18} aria-hidden="true" />,
  warning: <WarningIcon size={18} aria-hidden="true" />,
  error: <WarningIcon size={18} aria-hidden="true" />,
};

export const ToastContent: React.FC<ToastContentProps> = ({
  variant,
  onClose,
  children,
  isExiting = false,
}) => (
  <div
    className={[s.toastBase, s.variants[variant]].join(' ')}
    role="status"
    aria-live="polite"
    aria-atomic="true"
    data-lyfeguard="Toast"
    data-exiting={isExiting}
  >
    <span className={s.statusBar} aria-hidden="true" />
    <div className={s.iconWrapper} aria-hidden="true">
      {variantIcons[variant]}
    </div>
    <div className={s.message}>{children}</div>
    <button
      className={s.closeButton}
      onClick={onClose}
      aria-label="Close notification"
      type="button"
    >
      <CloseIcon size={16} aria-hidden="true" />
    </button>
  </div>
);

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
    <ToastContent variant={variant} onClose={handleClose} isExiting={isExiting}>
      {children}
    </ToastContent>
  );
};

