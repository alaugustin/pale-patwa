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
      className={`hover:underline text-blue-800 hover:text-blue-700 visited:text-violet-700 ${linkClasses}`}
      download={linkDownload}
      type={linkType}
      rel={linkRel}>{children
      }</a>
  );
}
