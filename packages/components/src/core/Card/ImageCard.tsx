import React from 'react';
import { Card, CardProps } from './Card';
import * as s from './ImageCard.css';

export interface ImageCardProps extends Omit<CardProps, 'children'> {
  /**
   * Image URL to display in the card.
   */
  image: string;
  /**
   * Alt text for the image.
   */
  imageAlt?: string;
  /**
   * Optional click handler for the card.
   */
  onClick?: () => void;
  /**
   * Optional href for the card link.
   */
  href?: string;
}

/**
 * ImageCard is a flexible card component for displaying images, logos, or visual content.
 * Use this for partner offers, brand showcases, or any content that needs a simple image card.
 */
export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  imageAlt = 'Card image',
  onClick,
  href,
  variant = 'compact',
  ...cardProps
}) => {
  const Element = href ? 'a' : onClick ? 'button' : 'div';
  const props = href
    ? { href }
    : onClick
      ? { type: 'button' as const, onClick }
      : {};

  return (
    <Card variant={variant} className={s.card} data-lyfeguard="ImageCard" {...cardProps}>
      <Element className={s.content} {...props}>
        <img src={image} alt={imageAlt} className={s.image} />
      </Element>
    </Card>
  );
};

ImageCard.displayName = 'ImageCard';

