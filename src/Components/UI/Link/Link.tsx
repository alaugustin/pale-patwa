import React from 'react';
import { ILinkProps } from './Link.d';

export default function Link({
  linkHref,
  linkTarget,
  linkClasses,
  linkDownload,
  linkType,
  linkRel,
  children
}: ILinkProps) {

  return (
    <a
      href={linkHref}
      target={linkTarget}
      className={linkClasses}
      download={linkDownload}
      type={linkType}
      rel={linkRel}>
      {children}
    </a>
  );
}
