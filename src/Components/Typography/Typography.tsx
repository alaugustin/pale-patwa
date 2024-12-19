import React from 'react';
import { ITypographyProps } from './Typography.d';

export const Typography: React.FC<ITypographyProps> = ({ variant, className, children }) => {
  const elements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    span: 'span',
    p: 'p'
  } as const;

  const Element = variant && variant in elements ?
    elements[variant as keyof typeof elements] :
    'p';

  return <Element className={className}>{children}</Element>;
};
