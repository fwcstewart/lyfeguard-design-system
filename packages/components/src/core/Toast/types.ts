import type { ReactNode } from 'react';
import type { StatusVariant } from '../statusTokens';

export type ToastVariant = StatusVariant;
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ToastOptions {
  /**
   * Visual variant for the toast
   */
  variant?: ToastVariant;
  /**
   * Auto-dismiss timeout in milliseconds. Set to 0 to disable auto-dismiss.
   */
  duration?: number;
  /**
   * Position of the toast container
   */
  position?: ToastPosition;
}

export interface ToastItemData {
  id: string;
  message: ReactNode;
  variant: ToastVariant;
  duration: number;
}
