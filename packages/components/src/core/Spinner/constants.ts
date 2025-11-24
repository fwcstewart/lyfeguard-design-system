import { vars } from '../../globals.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerSizeTokens {
  size: string;
  strokeWidth: string;
}

export const SPINNER_SIZES: Record<SpinnerSize, SpinnerSizeTokens> = {
  sm: {
    size: vars.spacing[6],
    strokeWidth: `calc(${vars.spacing[1]} * 0.5)`,
  },
  md: {
    size: vars.spacing[7],
    strokeWidth: `calc(${vars.spacing[1]} * 0.75)`,
  },
  lg: {
    size: vars.spacing[9],
    strokeWidth: `calc(${vars.spacing[2]} * 0.5)`,
  },
};
