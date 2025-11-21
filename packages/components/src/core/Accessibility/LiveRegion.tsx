import React from "react";
import * as s from "./LiveRegion.css";

export interface LiveRegionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * ARIA role for the live region. "status" is polite by default, while
   * "alert" should be used for high-priority announcements.
   */
  role?: "status" | "alert";
  /**
   * Politeness level for screen reader announcements.
   */
  politeness?: "polite" | "assertive";
  /**
   * Message announced to assistive technologies.
   */
  message: string;
}

/**
 * LiveRegion renders an aria-live container for announcing dynamic updates
 * to assistive technologies. It uses visually hidden positioning while
 * keeping theme-aware colours for consistent contrast if surfaced.
 */
export const LiveRegion: React.FC<LiveRegionProps> = ({
  role = "status",
  politeness = "polite",
  message,
  ...props
}) => {
  return (
    <div
      data-lyfeguard="LiveRegion"
      role={role}
      aria-live={politeness}
      aria-atomic="true"
      className={s.liveRegion}
      {...props}
    >
      {message}
    </div>
  );
};
