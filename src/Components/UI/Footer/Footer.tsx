import React from 'react';
import { IFooterProps } from './Footer.d';
import { BlockElement } from '../BlockLevel/BlockElement';

export default function Footer({
  footerContainerClass,
  currentYear,
  siteName
}: IFooterProps) {
  const footerInfo = `${currentYear} ${siteName}`;

  return (
    <BlockElement variant='footer' className={footerContainerClass}>
      <BlockElement id='copyRight'>&copy; {footerInfo}</BlockElement>
    </BlockElement>
  );
}
