import React from 'react';
import { ITypographyProps } from './Typography.d';

export const Typography = ({
  variant,
  className,
  children,
  role,
  ariaLabel,
}: ITypographyProps) => {
  const elements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    span: 'span',
    p: 'p',
    strong: 'strong',
    em: 'em',
    i: 'i',
    sub: 'sub',
  } as const;

  const Element = variant && variant in elements ?
    elements[variant as keyof typeof elements] :
    'p';

  return <Element className={className} role={role} aria-label={ariaLabel}>{children}</Element>;
};
