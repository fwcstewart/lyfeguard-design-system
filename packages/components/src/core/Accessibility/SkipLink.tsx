import React from "react";
import * as s from "./SkipLink.css";

export interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The id of the element to jump to. Defaults to "content" which should
   * correspond to the `id` of your main content container.
   */
  targetId?: string;
  /**
   * Text displayed inside the skip link. Defaults to "Skip to content".
   */
  label?: string;
}

/**
 * SkipLink provides a keyboard-accessible way for users to jump directly to
 * the main page content, bypassing navigation links. It is hidden off-screen
 * until focused.
 */
export const SkipLink: React.FC<SkipLinkProps> = ({ targetId = "content", label = "Skip to content", onFocus, onBlur, ...props }) => {
  const href = `#${targetId}`;
  const [isFocusVisible, setIsFocusVisible] = React.useState(false);

  const handleFocus = (event: React.FocusEvent<HTMLAnchorElement>) => {
    setIsFocusVisible(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLAnchorElement>) => {
    setIsFocusVisible(false);
    onBlur?.(event);
  };

  return (
    <a
      data-lyfeguard="SkipLink"
      href={href}
      className={s.skipLink}
      data-focus-visible={isFocusVisible ? "true" : "false"}
      style={isFocusVisible ? { transform: "translateY(0)" } : undefined}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    >
      {label}
    </a>
  );
};