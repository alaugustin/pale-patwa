import React from 'react';
import { IBlockElementProps } from './BlockElement.d';

export const BlockElement = (props: IBlockElementProps) => {
  const { id, className, children } = props;
  let blockElement;


  switch (props.variant) {
  case 'footer':
    blockElement = <footer id={id} className={className}>{children}</footer>;
    break;
  case 'section':
    blockElement = <section id={id} className={className}>{children}</section>;
    break;
  case 'article':
    blockElement = <article id={id} className={className}>{children}</article>;
    break;
  case 'ol':
    blockElement = <ol id={id} className={className}>{children}</ol>;
    break;
  case 'main':
    blockElement = <main id={id} className={className}>{children}</main>;
    break;
  case 'header':
    blockElement = <header id={id} className={className}>{children}</header>;
    break;
  case 'ul':
    blockElement = <ul id={id} className={className}>{children}</ul>;
    break;
  default:
    blockElement = <div id={id} className={className}>{children}</div>;
    break;
  }
  return (
    <>{blockElement}</>
  );
};
