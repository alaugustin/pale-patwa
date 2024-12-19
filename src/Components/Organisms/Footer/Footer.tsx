import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IFooterProps } from './Footer.d';

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
