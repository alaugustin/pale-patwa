import React from 'react';
import { IFooterProps } from './Footer.d';

export default function Footer({
  footerContainerClass,
  currentYear,
  siteName
}: IFooterProps) {

  return (
    <footer className={footerContainerClass}>
      <div id="copyRight">&copy; {currentYear} {siteName}</div>
    </footer>
  );
}
