import { createGlobalTheme } from '@vanilla-extract/css';

// Import token variables from the built CSS file. When this file is imported
// in your consuming application, ensure you import the tokens CSS first.
// Example: import '@lyfeguard/tokens/dist/css/tokens.css';

export const vars = createGlobalTheme(':root', {
  color: {
    brand900: 'var(--color-brand-900)',
    brand800: 'var(--color-brand-800)',
    brand500: 'var(--color-brand-500)',
    brand500_20: 'var(--color-brand-500_20)',
    brand500_30: 'var(--color-brand-500_30)',
    accentMint: 'var(--color-accent-mint)',
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
    warning500: 'var(--color-warning-500)',
    warning100: 'var(--color-warning-100)',
    error500: 'var(--color-error-500)',
    error100: 'var(--color-error-100)',
    info500: 'var(--color-info-500)',
    info100: 'var(--color-info-100)'
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
    sans: 'var(--font-family-sans)'
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
    brand500_20: 'var(--color-brand-500_20)',
    brand500_30: 'var(--color-brand-500_30)',
    accentMint: 'var(--color-accent-mint)',
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
    warning500: 'var(--color-warning-500)',
    warning100: 'var(--color-warning-100)',
    error500: 'var(--color-error-500)',
    error100: 'var(--color-error-100)',
    info500: 'var(--color-info-500)',
    info100: 'var(--color-info-100)'
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
    sans: 'var(--font-family-sans)'
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
