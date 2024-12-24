import React from 'react';
import { IBlockElementProps } from './BlockElement.d';

export const BlockElement = ({
  variant,
  className,
  children,
  id }: IBlockElementProps
) => {
  const elements = {
    footer: 'footer',
    section: 'section',
    article: 'article',
    ol: 'ol',
    main: 'main',
    header: 'header',
    ul: 'ul',
    aside: 'aside',
  } as const;

  const Element = variant && variant in elements ?
    elements[variant as keyof typeof elements] :
    'div';

  return <Element id={id} className={className}>{children}</Element>;
};
