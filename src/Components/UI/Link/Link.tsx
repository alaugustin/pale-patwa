import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ILinkProps } from './Link.types';

export default function Link({
  linkHref,
  linkTarget,
  linkClasses,
  linkDownload,
  linkType,
  linkRel,
  children
}: ILinkProps) {
  const isInternalRoute =
    linkHref.startsWith('/')
    && !linkHref.startsWith('//')
    && !/^https?:\/\//i.test(linkHref)
    && linkTarget !== '_blank';

  if (isInternalRoute) {
    return (
      <RouterLink to={linkHref} className={linkClasses}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a
      href={linkHref}
      target={linkTarget}
      className={linkClasses}
      {...(linkDownload ? { download: linkDownload } : {})}
      type={linkType}
      rel={linkRel}>
      {children}
    </a>
  );
}
