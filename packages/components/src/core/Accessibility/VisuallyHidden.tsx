import React from "react";
import * as s from "./VisuallyHidden.css";

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * VisuallyHidden hides its children visually while keeping them accessible to
 * screen readers. Use it to provide accessible labels or descriptions for
 * interactive elements when visual text is not desired.
 */
export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children, ...props }) => {
  return (
    <span data-lyfeguard="VisuallyHidden" className={s.visuallyHidden} {...props}>
      {children}
    </span>
  );
};