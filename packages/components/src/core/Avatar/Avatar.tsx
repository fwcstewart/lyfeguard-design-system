import React from 'react';
import * as s from './Avatar.css';
import { vars } from '../../globals.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * URL of the avatar image. If not provided, initials based on the name
   * are displayed instead.
   */
  src?: string;
  /**
   * Name used to generate initials when no image is provided.
   */
  name: string;
  /**
   * Size of the avatar. Defaults to the spacing[8] token.
   */
  size?: number;
  /**
   * Optional background colour for the fallback. Defaults to the theme surface colour.
   */
  backgroundColor?: string;
}

/**
 * Avatar component
 *
 * Displays a circular image or the initials of a name. The size can be
 * customised and a background colour may be provided for the fallback.
 */
export const Avatar: React.FC<AvatarProps> = ({ src, name, size, backgroundColor, style, ...rest }) => {
  const initials = React.useMemo(() => {
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const second = parts[1]?.[0] ?? '';
    return (first + second).toUpperCase();
  }, [name]);

  const dimension = size ?? vars.spacing[8];
  const customProperties: React.CSSProperties = {
    width: dimension,
    height: dimension,
    ...(backgroundColor
      ? {
          ['--avatar-background' as const]: backgroundColor,
          ['--avatar-background-dark' as const]: backgroundColor,
          ['--avatar-background-active' as const]: backgroundColor,
          ['--avatar-background-active-dark' as const]: backgroundColor,
        }
      : {}),
  };
  const mergedStyle = { ...customProperties, ...style };

  return (
    <div
      className={s.container}
      style={mergedStyle}
      data-lyfeguard="Avatar"
      role="img"
      aria-label={name}
      {...rest}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={s.image} src={src} alt={name} />
      ) : (
        initials
      )}
    </div>
  );
};