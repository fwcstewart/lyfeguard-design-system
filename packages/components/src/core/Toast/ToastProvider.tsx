import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ToastItem } from './ToastItem';
import * as s from './Toast.css';
import { vars } from '../../globals.css';
import type { ToastOptions, ToastPosition, ToastVariant, ToastItemData } from './types';

export type { ToastOptions, ToastPosition, ToastVariant, ToastItemData as Toast } from './types';

interface ToastContextValue {
  toasts: ToastItemData[];
  showToast: (message: ReactNode, options?: ToastOptions) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export interface ToastProviderProps {
  /**
   * Maximum number of toasts to display at once
   */
  maxToasts?: number;
  /**
   * Default position for toasts
   */
  defaultPosition?: ToastPosition;
  /**
   * Default duration for toasts in milliseconds
   */
  defaultDuration?: number;
  children: ReactNode;
}

/**
 * ToastProvider manages the toast queue and provides the useToast hook.
 *
 * Wrap your application (or a subtree) with ToastProvider to enable toast
 * notifications throughout that part of the component tree.
 */
export const ToastProvider: React.FC<ToastProviderProps> = ({
  maxToasts = 5,
  defaultPosition = 'bottom-right',
  defaultDuration = 5000,
  children,
}) => {
  const [toasts, setToasts] = useState<ToastItemData[]>([]);

  const showToast = useCallback(
    (message: ReactNode, options?: ToastOptions): string => {
      const id = `toast-${Date.now()}-${Math.random()}`;
      const toast: ToastItemData = {
        id,
        message,
        variant: options?.variant || 'info',
        duration: options?.duration !== undefined ? options.duration : defaultDuration,
      };

      setToasts((prev) => {
        const newToasts = [...prev, toast];
        // Limit the number of toasts
        return newToasts.slice(-maxToasts);
      });

      return id;
    },
    [maxToasts, defaultDuration]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  const value: ToastContextValue = {
    toasts,
    showToast,
    removeToast,
    clearAll,
  };

  // Group toasts by position
  const toastsByPosition = toasts.reduce(
    (acc, toast) => {
      // For now, all toasts use defaultPosition
      // In a more advanced implementation, each toast could have its own position
      const position = defaultPosition;
      if (!acc[position]) {
        acc[position] = [];
      }
      acc[position].push(toast);
      return acc;
    },
    {} as Record<ToastPosition, ToastItemData[]>
  );

  const getPositionStyles = (position: ToastPosition): React.CSSProperties => {
    const offset = vars.spacing[4] as unknown as string;
    switch (position) {
      case 'top-left':
        return { top: offset, left: offset, bottom: 'auto', right: 'auto' };
      case 'top-right':
        return { top: offset, right: offset, bottom: 'auto', left: 'auto' };
      case 'bottom-left':
        return { bottom: offset, left: offset, top: 'auto', right: 'auto' };
      case 'bottom-right':
      default:
        return { bottom: offset, right: offset, top: 'auto', left: 'auto' };
    }
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
        <div
          key={position}
          className={s.container}
          style={getPositionStyles(position as ToastPosition)}
        >
          {positionToasts.map((toast) => (
            <ToastItem
              key={toast.id}
              id={toast.id}
              variant={toast.variant}
              duration={toast.duration}
              onClose={() => removeToast(toast.id)}
            >
              {toast.message}
            </ToastItem>
          ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
};

/**
 * Hook to access toast functionality.
 *
 * Must be used within a ToastProvider.
 *
 * @example
 * ```tsx
 * const { showToast } = useToast();
 * showToast('Operation successful!', { variant: 'success' });
 * ```
 */
export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

