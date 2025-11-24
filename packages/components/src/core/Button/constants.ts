import { vars } from '../../globals.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'dark' | 'danger' | 'ghost';
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
  };
  active: {
    background: string;
    border: string;
    shadow: string;
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
    border: 'transparent',
    shadow: vars.shadow.xs,
    hover: {
      background: vars.color.success600,
      border: 'transparent',
      shadow: vars.shadow.md,
    },
    active: {
      background: vars.color.success600,
      border: 'transparent',
      shadow: vars.shadow.xs,
    },
    disabled: {
      background: vars.color.accentMint,
      border: 'transparent',
      color: vars.color.theme.text.disabled,
    },
    focusShadow: focusRingLight,
  },
  secondary: {
    background: 'transparent',
    color: vars.color.accentMint,
    border: `1.5px solid ${vars.color.accentMint}`,
    shadow: 'none',
    hover: {
      background: `color-mix(in srgb, ${vars.color.accentMint} 18%, ${vars.color.theme.surface})`,
      border: `1.5px solid ${vars.color.accentMint}`,
      shadow: 'none',
    },
    active: {
      background: `color-mix(in srgb, ${vars.color.accentMint} 22%, ${vars.color.theme.surfaceActive})`,
      border: `1.5px solid ${vars.color.accentMint}`,
      shadow: 'none',
    },
    disabled: {
      background: 'transparent',
      border: `1.5px solid ${vars.color.theme.border}`,
      color: vars.color.theme.text.disabled,
    },
    focusShadow: focusRingLight,
  },
  tertiary: {
    background: 'transparent',
    color: vars.color.accentMint,
    border: 'transparent',
    shadow: 'none',
    hover: {
      background: 'transparent',
      border: 'transparent',
      shadow: 'none',
    },
    active: {
      background: 'transparent',
      border: 'transparent',
      shadow: 'none',
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      color: vars.color.theme.text.disabled,
    },
    focusShadow: focusRingLight,
  },
  dark: {
    background: vars.color.brand900,
    color: vars.color.neutral0,
    border: 'transparent',
    shadow: vars.shadow.xs,
    hover: {
      background: vars.color.brand800,
      border: 'transparent',
      shadow: vars.shadow.md,
    },
    active: {
      background: vars.color.brand800,
      border: 'transparent',
      shadow: vars.shadow.xs,
    },
    disabled: {
      background: vars.color.brand900,
      border: 'transparent',
      color: vars.color.theme.text.disabled,
    },
    focusShadow: focusRingDark,
  },
  danger: {
    background: vars.color.error500,
    color: vars.color.neutral0,
    border: 'transparent',
    shadow: vars.shadow.xs,
    hover: {
      background: `color-mix(in srgb, ${vars.color.error500} 90%, ${vars.color.brand900})`,
      border: 'transparent',
      shadow: vars.shadow.md,
    },
    active: {
      background: `color-mix(in srgb, ${vars.color.error500} 85%, ${vars.color.brand900})`,
      border: 'transparent',
      shadow: vars.shadow.xs,
    },
    disabled: {
      background: vars.color.error500,
      border: 'transparent',
      color: vars.color.theme.text.disabled,
    },
    focusShadow: focusRingDark,
  },
  ghost: {
    background: 'transparent',
    color: vars.color.theme.text.primary,
    border: 'transparent',
    shadow: 'none',
    hover: {
      background: vars.color.theme.surfaceHover,
      border: 'transparent',
      shadow: 'none',
    },
    active: {
      background: vars.color.theme.surfaceActive,
      border: 'transparent',
      shadow: 'none',
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      color: vars.color.theme.text.disabled,
    },
    focusShadow: focusRingLight,
  },
};

export const BUTTON_FOCUS_OUTLINE = {
  width: '3px',
  offset: vars.spacing[1],
};

