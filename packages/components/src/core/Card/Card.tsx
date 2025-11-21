import React from 'react';
import * as s from './Card.css';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <div className={s.card} {...props}>
      {children}
    </div>
  );
};
