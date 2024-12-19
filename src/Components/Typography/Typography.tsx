import React from 'react';
import { ITypographyProps } from './Typography.d';

export const Typography = (props: ITypographyProps) => {
  const { variant, className, children } = props;
  let typographyElement;

  switch (variant) {
  case 'h1':
    typographyElement = <h1 className={className}>{children}</h1>;
    break;
  case 'h2':
    typographyElement = <h2 className={className}>{children}</h2>;
    break;
  case 'h3':
    typographyElement = <h3 className={className}>{children}</h3>;
    break;
  case 'span':
    typographyElement = <span className={className}>{children}</span>;
    break;
  default:
    typographyElement = <p className={className}>{children}</p>;
    break;
  }
  return (
    <>{typographyElement}</>
  );
};
