import React from 'react';
import * as s from './Textarea.css';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className={s.wrapper} data-lyfeguard="Textarea">
        {label && <label className={s.label}>{label}</label>}
        <textarea ref={ref} className={s.textarea} {...props} />
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
