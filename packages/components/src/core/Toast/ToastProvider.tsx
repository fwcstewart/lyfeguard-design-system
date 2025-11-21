import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ToastItem } from './ToastItem';
import * as s from './Toast.css';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
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

export interface Toast {
  id: string;
  message: ReactNode;
  variant: ToastVariant;
  duration: number;
}

interface ToastContextValue {
  toasts: Toast[];
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
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: ReactNode, options?: ToastOptions): string => {
      const id = `toast-${Date.now()}-${Math.random()}`;
      const toast: Toast = {
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
    {} as Record<ToastPosition, Toast[]>
  );

  const getPositionStyles = (position: ToastPosition): React.CSSProperties => {
    switch (position) {
      case 'top-left':
        return { top: '16px', left: '16px', bottom: 'auto', right: 'auto' };
      case 'top-right':
        return { top: '16px', right: '16px', bottom: 'auto', left: 'auto' };
      case 'bottom-left':
        return { bottom: '16px', left: '16px', top: 'auto', right: 'auto' };
      case 'bottom-right':
      default:
        return { bottom: '16px', right: '16px', top: 'auto', left: 'auto' };
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

