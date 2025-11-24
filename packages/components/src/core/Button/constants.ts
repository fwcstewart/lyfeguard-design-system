import { vars } from '../../globals.css';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'dark'
  | 'dark-secondary'
  | 'danger'
  | 'ghost'
  | 'inverted'
  | 'white'
  | 'black'
  | 'outline-white'
  | 'outline-modal'
  | 'alert'
  | 'edit'
  | 'inactive';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonSizeTokens {
  paddingX: string;
  paddingY: string;
  minHeight: string;
  gap: string;
  fontSize: string;
  lineHeight: string;
}

export const BUTTON_SIZES: Record<ButtonSize, ButtonSizeTokens> = {
  sm: {
    paddingX: vars.spacing[3],
    paddingY: vars.spacing[2],
    minHeight: vars.spacing[7],
    gap: vars.spacing[2],
    fontSize: vars.font.size.body.sm,
    lineHeight: vars.font.lineHeight.body.sm,
  },
  md: {
    paddingX: vars.spacing[5],
    paddingY: vars.spacing[3],
    minHeight: vars.spacing[8],
    gap: vars.spacing[2],
    fontSize: vars.font.size.ui.button,
    lineHeight: vars.font.lineHeight.ui.button,
  },
  lg: {
    paddingX: vars.spacing[8],
    paddingY: vars.spacing[5],
    minHeight: vars.spacing[10],
    gap: vars.spacing[3],
    fontSize: vars.font.size.body.lg,
    lineHeight: vars.font.lineHeight.body.lg,
  },
};

export interface ButtonVariantTokens {
  background: string;
  color: string;
  border: string;
  shadow: string;
  hover: {
    background: string;
    border: string;
    shadow: string;
    color?: string;
  };
  active: {
    background: string;
    border: string;
    shadow: string;
    color?: string;
  };
  disabled: {
    background: string;
    border: string;
    color: string;
  };
  focusShadow: string;
}

const focusRingLight = `0 0 0 3px color-mix(in srgb, ${vars.color.accentMint} 32%, ${vars.color.theme.surface})`;
const focusRingDark = `0 0 0 3px color-mix(in srgb, ${vars.color.accentMint} 40%, ${vars.color.theme.background})`;

export const BUTTON_VARIANTS: Record<ButtonVariant, ButtonVariantTokens> = {
  primary: {
    background: vars.color.accentMint,
    color: vars.color.brand900,
    border: `1px solid ${vars.color.accentMint}`,
    shadow: 'none',
    hover: {
      background: vars.color.brand900,
      border: `1px solid ${vars.color.brand900}`,
      shadow: 'none',
      color: vars.color.accentMint,
    },
    active: {
      background: vars.color.brand900,
      border: `1px solid ${vars.color.brand900}`,
      shadow: 'none',
      color: vars.color.accentMint,
    },
    disabled: {
      background: vars.color.accentMint,
      border: `1px solid ${vars.color.accentMint}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  secondary: {
    background: vars.color.brand900,
    color: vars.color.neutral0,
    border: `1px solid ${vars.color.brand900}`,
    shadow: vars.shadow.xs,
    hover: {
      background: vars.color.neutral0,
      border: `1px solid ${vars.color.neutral0}`,
      shadow: vars.shadow.sm,
      color: vars.color.brand900,
    },
    active: {
      background: vars.color.neutral0,
      border: `1px solid ${vars.color.neutral0}`,
      shadow: vars.shadow.xs,
      color: vars.color.brand900,
    },
    disabled: {
      background: vars.color.brand900,
      border: `1px solid ${vars.color.theme.border}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  tertiary: {
    background: 'transparent',
    color: vars.color.accentMint,
    border: `1px solid ${vars.color.brand900}`,
    shadow: 'none',
    hover: {
      background: 'transparent',
      border: `1px solid ${vars.color.accentMint}`,
      shadow: 'none',
      color: vars.color.accentMint,
    },
    active: {
      background: 'transparent',
      border: `1px solid ${vars.color.accentMint}`,
      shadow: 'none',
      color: vars.color.accentMint,
    },
    disabled: {
      background: 'transparent',
      border: `1px solid ${vars.color.theme.border}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  dark: {
    background: vars.color.brand900,
    color: vars.color.accentMint,
    border: `1px solid ${vars.color.brand900}`,
    shadow: 'none',
    hover: {
      background: vars.color.accentMint,
      border: `1px solid ${vars.color.accentMint}`,
      shadow: vars.shadow.sm,
      color: vars.color.brand900,
    },
    active: {
      background: vars.color.accentMint,
      border: `1px solid ${vars.color.accentMint}`,
      shadow: 'none',
      color: vars.color.brand900,
    },
    disabled: {
      background: vars.color.brand900,
      border: `1px solid ${vars.color.brand900}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  danger: {
    background: vars.color.error500,
    color: vars.color.neutral0,
    border: `1px solid ${vars.color.error500}`,
    shadow: 'none',
    hover: {
      background: `color-mix(in srgb, ${vars.color.error500} 80%, ${vars.color.brand900})`,
      border: `1px solid color-mix(in srgb, ${vars.color.error500} 80%, ${vars.color.brand900})`,
      shadow: 'none',
    },
    active: {
      background: `color-mix(in srgb, ${vars.color.error500} 70%, ${vars.color.brand900})`,
      border: `1px solid color-mix(in srgb, ${vars.color.error500} 70%, ${vars.color.brand900})`,
      shadow: 'none',
    },
    disabled: {
      background: vars.color.error500,
      border: `1px solid ${vars.color.error500}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  ghost: {
    background: 'transparent',
    color: vars.color.brand900,
    border: 'transparent',
    shadow: 'none',
    hover: {
      background: 'transparent',
      border: 'transparent',
      shadow: 'none',
      color: `color-mix(in srgb, ${vars.color.brand900} 60%, transparent)`,
    },
    active: {
      background: 'transparent',
      border: 'transparent',
      shadow: 'none',
      color: `color-mix(in srgb, ${vars.color.brand900} 70%, transparent)`,
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  inverted: {
    background: vars.color.brand900,
    color: vars.color.neutral0,
    border: `1px solid ${vars.color.brand900}`,
    shadow: 'none',
    hover: {
      background: vars.color.accentMint,
      border: `1px solid ${vars.color.accentMint}`,
      shadow: vars.shadow.sm,
      color: vars.color.brand900,
    },
    active: {
      background: vars.color.accentMint,
      border: `1px solid ${vars.color.accentMint}`,
      shadow: 'none',
      color: vars.color.brand900,
    },
    disabled: {
      background: vars.color.brand900,
      border: `1px solid ${vars.color.brand900}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  'dark-secondary': {
    background: vars.color.brand900,
    color: vars.color.accentMint,
    border: `1px solid ${vars.color.brand900}`,
    shadow: 'none',
    hover: {
      background: vars.color.accentMint,
      border: `1px solid ${vars.color.accentMint}`,
      shadow: vars.shadow.sm,
      color: vars.color.brand900,
    },
    active: {
      background: vars.color.accentMint,
      border: `1px solid ${vars.color.accentMint}`,
      shadow: 'none',
      color: vars.color.brand900,
    },
    disabled: {
      background: vars.color.brand900,
      border: `1px solid ${vars.color.brand900}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  white: {
    background: vars.color.neutral0,
    color: vars.color.brand900,
    border: `1px solid ${vars.color.neutral0}`,
    shadow: 'none',
    hover: {
      background: 'rgba(255, 255, 255, 0.8)',
      border: `1px solid rgba(255, 255, 255, 0.8)`,
      shadow: vars.shadow.sm,
    },
    active: {
      background: 'rgba(255, 255, 255, 0.7)',
      border: `1px solid rgba(255, 255, 255, 0.7)`,
      shadow: vars.shadow.xs,
    },
    disabled: {
      background: vars.color.neutral0,
      border: `1px solid ${vars.color.neutral0}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  black: {
    background: '#000000',
    color: vars.color.neutral0,
    border: '1px solid #000000',
    shadow: 'none',
    hover: {
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(0, 0, 0, 0.8)',
      shadow: vars.shadow.sm,
    },
    active: {
      background: 'rgba(0, 0, 0, 0.7)',
      border: '1px solid rgba(0, 0, 0, 0.7)',
      shadow: vars.shadow.xs,
    },
    disabled: {
      background: '#000000',
      border: '1px solid #000000',
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  'outline-white': {
    background: 'transparent',
    color: vars.color.neutral0,
    border: `1px solid ${vars.color.neutral0}`,
    shadow: 'none',
    hover: {
      background: 'transparent',
      border: `1px solid ${vars.color.accentMint}`,
      shadow: 'none',
    },
    active: {
      background: 'transparent',
      border: `1px solid ${vars.color.accentMint}`,
      shadow: 'none',
    },
    disabled: {
      background: 'transparent',
      border: `1px solid ${vars.color.theme.border}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  'outline-modal': {
    background: 'transparent',
    color: vars.color.brand900,
    border: `1px solid ${vars.color.brand900}`,
    shadow: 'none',
    hover: {
      background: 'transparent',
      border: `1px solid rgba(8, 37, 46, 0.6)`,
      shadow: 'none',
    },
    active: {
      background: 'transparent',
      border: `1px solid rgba(8, 37, 46, 0.4)`,
      shadow: 'none',
    },
    disabled: {
      background: 'transparent',
      border: `1px solid ${vars.color.theme.border}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  alert: {
    background: 'transparent',
    color: vars.color.brand900,
    border: 'transparent',
    shadow: 'none',
    hover: {
      background: `color-mix(in srgb, ${vars.color.error500} 10%, transparent)`,
      border: 'transparent',
      shadow: 'none',
      color: vars.color.error500,
    },
    active: {
      background: `color-mix(in srgb, ${vars.color.error500} 20%, transparent)`,
      border: 'transparent',
      shadow: 'none',
      color: vars.color.error500,
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  edit: {
    background: 'transparent',
    color: vars.color.brand900,
    border: 'transparent',
    shadow: 'none',
    hover: {
      background: `color-mix(in srgb, ${vars.color.accentMint} 10%, transparent)`,
      border: 'transparent',
      shadow: 'none',
      color: vars.color.accentMint,
    },
    active: {
      background: `color-mix(in srgb, ${vars.color.accentMint} 20%, transparent)`,
      border: 'transparent',
      shadow: 'none',
      color: vars.color.accentMint,
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      color: vars.color.theme.text.disabled,
    },
    focusShadow: 'none',
  },
  inactive: {
    background: 'transparent',
    color: vars.color.neutral500,
    border: `1px solid ${vars.color.neutral500}`,
    shadow: 'none',
    hover: {
      background: 'transparent',
      border: `1px solid ${vars.color.neutral500}`,
      shadow: 'none',
    },
    active: {
      background: 'transparent',
      border: `1px solid ${vars.color.neutral500}`,
      shadow: 'none',
    },
    disabled: {
      background: 'transparent',
      border: `1px solid ${vars.color.neutral500}`,
      color: vars.color.neutral500,
    },
    focusShadow: 'none',
  },
};

export const BUTTON_FOCUS_OUTLINE = {
  width: '3px',
  offset: vars.spacing[1],
};

