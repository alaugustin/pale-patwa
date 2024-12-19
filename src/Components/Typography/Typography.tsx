import React from 'react';
import { ITypographyProps } from './Typography.d';

export const Typography = (props: ITypographyProps) => {
  let tbdvarname;

  switch (props.variant) {
  case 'h1':
    tbdvarname = <h1 className={props.className}>{props.text}</h1>;
    break;
  case 'h2':
    tbdvarname = <h2 className={props.className}>{props.text}</h2>;
    break;
  case 'h3':
    tbdvarname = <h3 className={props.className}>{props.text}</h3>;
    break;
  case 'span':
    tbdvarname = <span className={props.className}>{props.text}</span>;
    break;
  default:
    tbdvarname = <p className={props.className}>{props.text}</p>;
    break;
  }
  return (
    <>{tbdvarname}</>
  );
};
