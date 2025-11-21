import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

// Import token variables from the built CSS file. When this file is imported
// in your consuming application, ensure you import the tokens CSS first.
// Example: import '@lyfeguard/tokens/dist/css/tokens.css';

// Define theme CSS variables that will be overridden in dark mode
globalStyle(':root', {
  vars: {
    '--color-theme-background': '#FFFFFF',
    '--color-theme-surface': '#F5F5F5',
    '--color-theme-surfaceHover': '#E7ECEC',
    '--color-theme-surfaceActive': '#CFD6D6',
    '--color-theme-border': '#CFD6D6',
    '--color-theme-borderHover': '#B8C0C0',
    '--color-theme-text-primary': '#2E3B3B',
    '--color-theme-text-secondary': '#5C6969',
    '--color-theme-text-tertiary': '#8A9595',
    '--color-theme-text-disabled': '#A0AAAA',
    '--color-theme-overlay': 'rgba(5,26,34,0.75)',
  },
});

globalStyle('.dark', {
  vars: {
    '--color-theme-background': '#051A22',
    '--color-theme-surface': 'rgba(23,123,154,0.2)',
    '--color-theme-surfaceHover': 'rgba(23,123,154,0.3)',
    '--color-theme-surfaceActive': 'rgba(23,123,154,0.35)',
    '--color-theme-border': 'rgba(23,123,154,0.4)',
    '--color-theme-borderHover': 'rgba(23,123,154,0.5)',
    '--color-theme-text-primary': '#FFFFFF',
    '--color-theme-text-secondary': '#FFFFFF',
    '--color-theme-text-tertiary': '#E7ECEC',
    '--color-theme-text-disabled': '#8A9595',
    '--color-theme-overlay': 'rgba(5,26,34,0.85)',
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
