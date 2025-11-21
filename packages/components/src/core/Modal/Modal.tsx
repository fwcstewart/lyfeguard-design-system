import React from 'react';
import * as s from './Modal.css';

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  open: boolean;
  /**
   * Callback fired when the overlay or backdrop is clicked
   */
  onClose: () => void;
  /**
   * Modal content
   */
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
