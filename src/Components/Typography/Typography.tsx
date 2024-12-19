import React from 'react';
import { ITypographyProps } from './Typography.d';

export const Typography = (props: ITypographyProps) => {
  let typographyElement;

  switch (props.variant) {
  case 'h1':
    typographyElement = <h1 className={props.className}>{props.text}</h1>;
    break;
  case 'h2':
    typographyElement = <h2 className={props.className}>{props.text}</h2>;
    break;
  case 'h3':
    typographyElement = <h3 className={props.className}>{props.text}</h3>;
    break;
  case 'span':
    typographyElement = <span className={props.className}>{props.text}</span>;
    break;
  default:
    typographyElement = <p className={props.className}>{props.text}</p>;
    break;
  }
  return (
    <>{typographyElement}</>
  );
};
