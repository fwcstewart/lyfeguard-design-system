import { vars } from '../globals.css';

export interface StatusColorTokens {
  background: string;
  border: string;
  text: string;
  icon: string;
}

export type StatusVariant = 'info' | 'success' | 'warning' | 'error';

export const STATUS_COLOR_TOKENS: Record<StatusVariant, StatusColorTokens> = {
  info: {
    background: vars.color.status.info.surface,
    border: vars.color.status.info.border,
    text: vars.color.status.info.text,
    icon: vars.color.status.info.icon,
  },
  success: {
    background: vars.color.status.success.surface,
    border: vars.color.status.success.border,
    text: vars.color.status.success.text,
    icon: vars.color.status.success.icon,
  },
  warning: {
    background: vars.color.status.warning.surface,
    border: vars.color.status.warning.border,
    text: vars.color.status.warning.text,
    icon: vars.color.status.warning.icon,
  },
  error: {
    background: vars.color.status.error.surface,
    border: vars.color.status.error.border,
    text: vars.color.status.error.text,
    icon: vars.color.status.error.icon,
  },
};
