import React from 'react';
import { IBlockElementProps } from './BlockElement.d';

export const BlockElement: React.FC<IBlockElementProps> = ({ variant, className, children, id }) => {
  const elements = {
    footer: 'footer',
    section: 'section',
    article: 'article',
    ol: 'ol',
    main: 'main',
    header: 'header',
    ul: 'ul'
  } as const;

  const Element = variant && variant in elements ?
    elements[variant as keyof typeof elements] :
    'div';

  return <Element id={id} className={className}>{children}</Element>;
};
