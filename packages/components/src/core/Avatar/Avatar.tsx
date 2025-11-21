import React from 'react';
import * as s from './Avatar.css';
import { vars } from '../../globals.css';

export interface AvatarProps {
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
   * Size of the avatar in pixels. Defaults to 32.
   */
  size?: number;
  /**
   * Optional background colour for the fallback. Defaults to the brand colour.
   */
  backgroundColor?: string;
}

/**
 * Avatar component
 *
 * Displays a circular image or the initials of a name. The size can be
 * customised and a background colour may be provided for the fallback.
 */
export const Avatar: React.FC<AvatarProps> = ({ src, name, size = 32, backgroundColor }) => {
  const initials = React.useMemo(() => {
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const second = parts[1]?.[0] ?? '';
    return (first + second).toUpperCase();
  }, [name]);
  return (
    <div
      className={s.container}
      style={{ width: size, height: size, backgroundColor: backgroundColor ?? vars.color.brand500 }}
      data-lyfeguard="Avatar"
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