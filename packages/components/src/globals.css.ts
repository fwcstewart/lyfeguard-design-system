import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

// Import token variables from the built CSS file. When this file is imported
// in your consuming application, ensure you import the tokens CSS first.
// Example: import '@lyfeguard/tokens/dist/css/tokens.css';

// Define theme CSS variables that will be overridden in dark mode
globalStyle(':root', {
  vars: {
    // Page background - the base background color for the entire page/viewport
    '--color-theme-background': 'var(--color-neutral-100)',
    // Component background - used for cards, modals, and other elevated surfaces
    '--color-theme-surface': 'var(--color-neutral-0)',
    '--color-theme-surfaceHover': 'var(--color-neutral-100)',
    '--color-theme-surfaceActive': 'var(--color-neutral-200)',
    '--color-theme-border': 'var(--color-neutral-200)',
    '--color-theme-borderHover': 'var(--color-neutral-300)',
    '--color-theme-text-primary': 'var(--color-neutral-900)',
    '--color-theme-text-secondary': 'var(--color-neutral-700)',
    '--color-theme-text-tertiary': 'var(--color-neutral-500)',
    '--color-theme-text-disabled': 'var(--color-neutral-400)',
    '--color-theme-overlay': 'color-mix(in srgb, var(--color-neutral-900) 80%, transparent)',
    '--color-status-info-surface': 'var(--color-info-100)',
    '--color-status-info-border': 'var(--color-info-500)',
    '--color-status-info-text': 'var(--color-info-500)',
    '--color-status-info-icon': 'var(--color-info-500)',
    '--color-status-success-surface': 'var(--color-success-500_15)',
    '--color-status-success-border': 'var(--color-success-600)',
    '--color-status-success-text': 'var(--color-success-600)',
    '--color-status-success-icon': 'var(--color-success-500)',
    '--color-status-warning-surface': 'var(--color-warning-100)',
    '--color-status-warning-border': 'var(--color-warning-500)',
    '--color-status-warning-text': 'var(--color-warning-500)',
    '--color-status-warning-icon': 'var(--color-warning-500)',
    '--color-status-error-surface': 'var(--color-error-100)',
    '--color-status-error-border': 'var(--color-error-500)',
    '--color-status-error-text': 'var(--color-error-500)',
    '--color-status-error-icon': 'var(--color-error-500)',
  },
});

globalStyle('.dark', {
  vars: {
    // Page background - the base background color for the entire page/viewport
    '--color-theme-background': 'var(--color-brand-900)', // #051A22 - matches dark theme definition in color.json
    // Component background - used for cards, modals, and other elevated surfaces
    '--color-theme-surface':
      'color-mix(in srgb, var(--color-brand-500) 18%, var(--color-brand-900))',
    '--color-theme-surfaceHover':
      'color-mix(in srgb, var(--color-brand-500) 28%, var(--color-brand-900))',
    '--color-theme-surfaceActive':
      'color-mix(in srgb, var(--color-brand-500) 36%, var(--color-brand-900))',
    '--color-theme-border': 'color-mix(in srgb, var(--color-brand-500) 40%, var(--color-brand-900))',
    '--color-theme-borderHover': 'color-mix(in srgb, var(--color-brand-500) 52%, var(--color-brand-900))',
    '--color-theme-text-primary': 'var(--color-neutral-0)',
    '--color-theme-text-secondary': 'var(--color-neutral-100)',
    '--color-theme-text-tertiary': 'var(--color-neutral-300)',
    '--color-theme-text-disabled': 'var(--color-neutral-500)',
    '--color-theme-overlay': 'color-mix(in srgb, var(--color-brand-900) 85%, transparent)', // rgba(5,26,34,0.85) - matches dark theme definition in color.json
    '--color-status-info-surface': 'var(--color-info-500_15)',
    '--color-status-info-border': 'var(--color-info-500)',
    '--color-status-info-text': 'var(--color-info-500)',
    '--color-status-info-icon': 'var(--color-info-500)',
    '--color-status-success-surface': 'var(--color-success-500_15)',
    '--color-status-success-border': 'var(--color-success-500)',
    '--color-status-success-text': 'var(--color-success-500)',
    '--color-status-success-icon': 'var(--color-success-500)',
    '--color-status-warning-surface': 'var(--color-warning-500_15)',
    '--color-status-warning-border': 'var(--color-warning-500)',
    '--color-status-warning-text': 'var(--color-warning-500)',
    '--color-status-warning-icon': 'var(--color-warning-500)',
    '--color-status-error-surface': 'var(--color-error-500_15)',
    '--color-status-error-border': 'var(--color-error-500)',
    '--color-status-error-text': 'var(--color-error-500)',
    '--color-status-error-icon': 'var(--color-error-500)',
  },
});

export const vars = createGlobalTheme(':root', {
  color: {
    brand900: 'var(--color-brand-900)',
    brand800: 'var(--color-brand-800)',
    brand500: 'var(--color-brand-500)',
    brand500_15: 'var(--color-brand-500_15)',
    brand500_20: 'var(--color-brand-500_20)',
    brand500_25: 'var(--color-brand-500_25)',
    brand500_30: 'var(--color-brand-500_30)',
    brand500_40: 'var(--color-brand-500_40)',
    brand500_50: 'var(--color-brand-500_50)',
    accentMint: 'var(--color-accent-mint)',
    accentMint_10: 'var(--color-accent-mint_10)',
    accentMint_15: 'var(--color-accent-mint_15)',
    accentMint_20: 'var(--color-accent-mint_20)',
    accentMint_30: 'var(--color-accent-mint_30)',
    accentMint_40: 'var(--color-accent-mint_40)',
    neutral0: 'var(--color-neutral-0)',
    neutral50: 'var(--color-neutral-50)',
    neutral100: 'var(--color-neutral-100)',
    neutral200: 'var(--color-neutral-200)',
    neutral300: 'var(--color-neutral-300)',
    neutral400: 'var(--color-neutral-400)',
    neutral500: 'var(--color-neutral-500)',
    neutral600: 'var(--color-neutral-600)',
    neutral700: 'var(--color-neutral-700)',
    neutral800: 'var(--color-neutral-800)',
    neutral900: 'var(--color-neutral-900)',
    success500: 'var(--color-success-500)',
    success600: 'var(--color-success-600)',
    success500_15: 'var(--color-success-500_15)',
    warning500: 'var(--color-warning-500)',
    warning100: 'var(--color-warning-100)',
    warning500_15: 'var(--color-warning-500_15)',
    error500: 'var(--color-error-500)',
    error100: 'var(--color-error-100)',
    error500_15: 'var(--color-error-500_15)',
    info500: 'var(--color-info-500)',
    info100: 'var(--color-info-100)',
    info500_15: 'var(--color-info-500_15)',
    theme: {
      background: 'var(--color-theme-background)',
      surface: 'var(--color-theme-surface)',
      surfaceHover: 'var(--color-theme-surfaceHover)',
      surfaceActive: 'var(--color-theme-surfaceActive)',
      border: 'var(--color-theme-border)',
      borderHover: 'var(--color-theme-borderHover)',
      text: {
        primary: 'var(--color-theme-text-primary)',
        secondary: 'var(--color-theme-text-secondary)',
        tertiary: 'var(--color-theme-text-tertiary)',
        disabled: 'var(--color-theme-text-disabled)',
      },
      overlay: 'var(--color-theme-overlay)',
    },
    status: {
      info: {
        surface: 'var(--color-status-info-surface)',
        border: 'var(--color-status-info-border)',
        text: 'var(--color-status-info-text)',
        icon: 'var(--color-status-info-icon)',
      },
      success: {
        surface: 'var(--color-status-success-surface)',
        border: 'var(--color-status-success-border)',
        text: 'var(--color-status-success-text)',
        icon: 'var(--color-status-success-icon)',
      },
      warning: {
        surface: 'var(--color-status-warning-surface)',
        border: 'var(--color-status-warning-border)',
        text: 'var(--color-status-warning-text)',
        icon: 'var(--color-status-warning-icon)',
      },
      error: {
        surface: 'var(--color-status-error-surface)',
        border: 'var(--color-status-error-border)',
        text: 'var(--color-status-error-text)',
        icon: 'var(--color-status-error-icon)',
      },
    },
  },
  spacing: {
    0: 'var(--spacing-0)',
    1: 'var(--spacing-1)',
    2: 'var(--spacing-2)',
    3: 'var(--spacing-3)',
    4: 'var(--spacing-4)',
    5: 'var(--spacing-5)',
    6: 'var(--spacing-6)',
    7: 'var(--spacing-7)',
    8: 'var(--spacing-8)',
    9: 'var(--spacing-9)',
    10: 'var(--spacing-10)'
  },
  radius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    round: '9999px'
  },
  font: {
    sans: 'var(--font-family-sans)',
    size: {
      heading: {
        xl: 'var(--font-size-heading-xl)',
        lg: 'var(--font-size-heading-lg)',
        md: 'var(--font-size-heading-md)',
        sm: 'var(--font-size-heading-sm)',
        xs: 'var(--font-size-heading-xs)'
      },
      body: {
        lg: 'var(--font-size-body-lg)',
        base: 'var(--font-size-body-base)',
        sm: 'var(--font-size-body-sm)',
        xs: 'var(--font-size-body-xs)'
      },
      ui: {
        label: 'var(--font-size-ui-label)',
        button: 'var(--font-size-ui-button)',
        overline: 'var(--font-size-ui-overline)'
      }
    },
    weight: {
      regular: 'var(--font-weight-regular)',
      medium: 'var(--font-weight-medium)',
      semiBold: 'var(--font-weight-semiBold)',
      bold: 'var(--font-weight-bold)'
    },
    lineHeight: {
      heading: {
        xl: 'var(--font-line-height-heading-xl)',
        lg: 'var(--font-line-height-heading-lg)',
        md: 'var(--font-line-height-heading-md)',
        sm: 'var(--font-line-height-heading-sm)',
        xs: 'var(--font-line-height-heading-xs)'
      },
      body: {
        lg: 'var(--font-line-height-body-lg)',
        base: 'var(--font-line-height-body-base)',
        sm: 'var(--font-line-height-body-sm)',
        xs: 'var(--font-line-height-body-xs)'
      },
      ui: {
        label: 'var(--font-line-height-ui-label)',
        button: 'var(--font-line-height-ui-button)',
        overline: 'var(--font-line-height-ui-overline)'
      }
    }
  },
  /**
   * Shadow tokens define elevation levels for cards, modals and overlays.
   * Light shadows provide subtle depth while heavier shadows communicate focus.
   */
  shadow: {
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)'
  },
  /**
   * Motion tokens define durations and easing curves for animations and
   * transitions. Using tokens for motion allows you to adjust the feel of
   * interactions globally while keeping a consistent rhythm across the
   * application.
   */
  motion: {
    duration: {
      fast: 'var(--motion-duration-fast)',
      normal: 'var(--motion-duration-normal)',
      slow: 'var(--motion-duration-slow)'
    },
    easing: {
      ease: 'var(--motion-easing-ease)',
      easeInOut: 'var(--motion-easing-easeInOut)',
      spring: 'var(--motion-easing-spring)'
    }
  },
  /**
   * Breakpoint tokens represent common viewport widths for responsive design.
   * They can be used to construct media queries in Vanilla Extract or other
   * styling solutions to adjust layouts at different screen sizes.
   */
  breakpoint: {
    sm: 'var(--breakpoint-sm)',
    md: 'var(--breakpoint-md)',
    lg: 'var(--breakpoint-lg)',
    xl: 'var(--breakpoint-xl)',
    xxl: 'var(--breakpoint-xxl)',
    widescreen: 'var(--breakpoint-widescreen)'
  },
  /**
   * Layout tokens define structural constraints like grid columns and gutter
   * sizes. You can reference these when building responsive grid and layout
   * components.
   */
  layout: {
    gridColumns: 'var(--layout-grid-columns)',
    gridGutter: 'var(--layout-grid-gutter)',
    containerMaxWidth: 'var(--layout-grid-containerMaxWidth)'
  }
});

/**
 * Dark mode variables.
 *
 * The Lyfeguard design system supports a dark theme by defining a second
 * global theme on the `.dark` selector.  This reuses the same token
 * names as the light theme but assigns them to darker neutral values to
 * provide sufficient contrast on dark backgrounds.  Brand and accent
 * colours remain the same to retain recognisability across themes.  If
 * you add new tokens to the light theme above, be sure to mirror them
 * here or provide sensible defaults.
 */
export const darkVars = createGlobalTheme('.dark', {
  color: {
    brand900: 'var(--color-brand-900)',
    brand800: 'var(--color-brand-800)',
    brand500: 'var(--color-brand-500)',
    brand500_15: 'var(--color-brand-500_15)',
    brand500_20: 'var(--color-brand-500_20)',
    brand500_25: 'var(--color-brand-500_25)',
    brand500_30: 'var(--color-brand-500_30)',
    brand500_40: 'var(--color-brand-500_40)',
    brand500_50: 'var(--color-brand-500_50)',
    accentMint: 'var(--color-accent-mint)',
    accentMint_10: 'var(--color-accent-mint_10)',
    accentMint_15: 'var(--color-accent-mint_15)',
    accentMint_20: 'var(--color-accent-mint_20)',
    accentMint_30: 'var(--color-accent-mint_30)',
    accentMint_40: 'var(--color-accent-mint_40)',
    // Invert the neutral palette for dark backgrounds.  Lighter values
    // become darker and vice versa.  This simple inversion provides a
    // reasonable baseline; refine these values in your token definitions
    // if you need more sophisticated colour mapping.
    neutral0: 'var(--color-neutral-900)',
    neutral50: 'var(--color-neutral-800)',
    neutral100: 'var(--color-neutral-700)',
    neutral200: 'var(--color-neutral-600)',
    neutral300: 'var(--color-neutral-500)',
    neutral400: 'var(--color-neutral-400)',
    neutral500: 'var(--color-neutral-300)',
    neutral600: 'var(--color-neutral-200)',
    neutral700: 'var(--color-neutral-100)',
    neutral800: 'var(--color-neutral-50)',
    neutral900: 'var(--color-neutral-0)',
    success500: 'var(--color-success-500)',
    success600: 'var(--color-success-600)',
    success500_15: 'var(--color-success-500_15)',
    warning500: 'var(--color-warning-500)',
    warning100: 'var(--color-warning-100)',
    warning500_15: 'var(--color-warning-500_15)',
    error500: 'var(--color-error-500)',
    error100: 'var(--color-error-100)',
    error500_15: 'var(--color-error-500_15)',
    info500: 'var(--color-info-500)',
    info100: 'var(--color-info-100)',
    info500_15: 'var(--color-info-500_15)',
    theme: {
      background: 'var(--color-theme-background)',
      surface: 'var(--color-theme-surface)',
      surfaceHover: 'var(--color-theme-surfaceHover)',
      surfaceActive: 'var(--color-theme-surfaceActive)',
      border: 'var(--color-theme-border)',
      borderHover: 'var(--color-theme-borderHover)',
      text: {
        primary: 'var(--color-theme-text-primary)',
        secondary: 'var(--color-theme-text-secondary)',
        tertiary: 'var(--color-theme-text-tertiary)',
        disabled: 'var(--color-theme-text-disabled)',
      },
      overlay: 'var(--color-theme-overlay)',
    },
    status: {
      info: {
        surface: 'var(--color-status-info-surface)',
        border: 'var(--color-status-info-border)',
        text: 'var(--color-status-info-text)',
        icon: 'var(--color-status-info-icon)',
      },
      success: {
        surface: 'var(--color-status-success-surface)',
        border: 'var(--color-status-success-border)',
        text: 'var(--color-status-success-text)',
        icon: 'var(--color-status-success-icon)',
      },
      warning: {
        surface: 'var(--color-status-warning-surface)',
        border: 'var(--color-status-warning-border)',
        text: 'var(--color-status-warning-text)',
        icon: 'var(--color-status-warning-icon)',
      },
      error: {
        surface: 'var(--color-status-error-surface)',
        border: 'var(--color-status-error-border)',
        text: 'var(--color-status-error-text)',
        icon: 'var(--color-status-error-icon)',
      },
    },
  },
  spacing: {
    0: 'var(--spacing-0)',
    1: 'var(--spacing-1)',
    2: 'var(--spacing-2)',
    3: 'var(--spacing-3)',
    4: 'var(--spacing-4)',
    5: 'var(--spacing-5)',
    6: 'var(--spacing-6)',
    7: 'var(--spacing-7)',
    8: 'var(--spacing-8)',
    9: 'var(--spacing-9)',
    10: 'var(--spacing-10)'
  },
  radius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    round: '9999px'
  },
  font: {
    sans: 'var(--font-family-sans)',
    size: {
      heading: {
        xl: 'var(--font-size-heading-xl)',
        lg: 'var(--font-size-heading-lg)',
        md: 'var(--font-size-heading-md)',
        sm: 'var(--font-size-heading-sm)',
        xs: 'var(--font-size-heading-xs)'
      },
      body: {
        lg: 'var(--font-size-body-lg)',
        base: 'var(--font-size-body-base)',
        sm: 'var(--font-size-body-sm)',
        xs: 'var(--font-size-body-xs)'
      },
      ui: {
        label: 'var(--font-size-ui-label)',
        button: 'var(--font-size-ui-button)',
        overline: 'var(--font-size-ui-overline)'
      }
    },
    weight: {
      regular: 'var(--font-weight-regular)',
      medium: 'var(--font-weight-medium)',
      semiBold: 'var(--font-weight-semiBold)',
      bold: 'var(--font-weight-bold)'
    },
    lineHeight: {
      heading: {
        xl: 'var(--font-line-height-heading-xl)',
        lg: 'var(--font-line-height-heading-lg)',
        md: 'var(--font-line-height-heading-md)',
        sm: 'var(--font-line-height-heading-sm)',
        xs: 'var(--font-line-height-heading-xs)'
      },
      body: {
        lg: 'var(--font-line-height-body-lg)',
        base: 'var(--font-line-height-body-base)',
        sm: 'var(--font-line-height-body-sm)',
        xs: 'var(--font-line-height-body-xs)'
      },
      ui: {
        label: 'var(--font-line-height-ui-label)',
        button: 'var(--font-line-height-ui-button)',
        overline: 'var(--font-line-height-ui-overline)'
      }
    }
  },
  /**
   * Shadow tokens define elevation levels for cards, modals and overlays.
   * Light shadows provide subtle depth while heavier shadows communicate focus.
   */
  shadow: {
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)'
  },
  motion: {
    duration: {
      fast: 'var(--motion-duration-fast)',
      normal: 'var(--motion-duration-normal)',
      slow: 'var(--motion-duration-slow)'
    },
    easing: {
      ease: 'var(--motion-easing-ease)',
      easeInOut: 'var(--motion-easing-easeInOut)',
      spring: 'var(--motion-easing-spring)'
    }
  },
  breakpoint: {
    sm: 'var(--breakpoint-sm)',
    md: 'var(--breakpoint-md)',
    lg: 'var(--breakpoint-lg)',
    xl: 'var(--breakpoint-xl)',
    xxl: 'var(--breakpoint-xxl)',
    widescreen: 'var(--breakpoint-widescreen)'
  },
  layout: {
    gridColumns: 'var(--layout-grid-columns)',
    gridGutter: 'var(--layout-grid-gutter)',
    containerMaxWidth: 'var(--layout-grid-containerMaxWidth)'
  }
});

globalStyle('body', {
  margin: 0,
  minHeight: '100vh',
  background: vars.color.theme.background,
  color: vars.color.theme.text.primary,
  fontFamily: vars.font.sans,
  transition: `background-color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}, color ${vars.motion.duration.normal} ${vars.motion.easing.easeInOut}`,
  colorScheme: 'light',
});

globalStyle('.dark body', {
  background: darkVars.color.theme.background,
  color: darkVars.color.theme.text.primary,
  colorScheme: 'dark',
});
