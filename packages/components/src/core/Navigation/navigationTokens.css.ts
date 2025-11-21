import { createVar, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const navigationSurface = createVar();
export const navigationText = createVar();
export const navigationMutedText = createVar();
export const navigationHover = createVar();
export const navigationActiveBackground = createVar();
export const navigationActiveText = createVar();
export const navigationIndicator = createVar();
export const navigationSeparator = createVar();

globalStyle(':root', {
  vars: {
    [navigationSurface]: vars.color.theme.surface,
    [navigationText]: vars.color.theme.text.primary,
    [navigationMutedText]: vars.color.theme.text.secondary,
    [navigationHover]: vars.color.theme.surfaceHover,
    [navigationActiveBackground]: vars.color.brand500_20,
    [navigationActiveText]: vars.color.brand500,
    [navigationIndicator]: vars.color.brand500,
    [navigationSeparator]: vars.color.theme.border,
  },
});

globalStyle('.dark', {
  vars: {
    [navigationSurface]: vars.color.theme.surface,
    [navigationText]: vars.color.theme.text.primary,
    [navigationMutedText]: vars.color.theme.text.secondary,
    [navigationHover]: vars.color.theme.surfaceHover,
    [navigationActiveBackground]: vars.color.brand500_25,
    [navigationActiveText]: vars.color.brand500,
    [navigationIndicator]: vars.color.brand500_40,
    [navigationSeparator]: vars.color.theme.border,
  },
});
