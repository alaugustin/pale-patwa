import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IFooterProps } from './Footer.d';

const { footerInfoClasses } = AppContentData.uiClasses;
const { copyRight } = AppContentData.icons;

export default function Footer({
  footerContainerClass,
  currentYear,
  siteName
}: IFooterProps) {
  const footerInfo = `${currentYear} ${siteName}`;

  return (
    <BlockElement variant='footer' className={footerContainerClass}>
      <BlockElement className={footerInfoClasses}>{copyRight}&nbsp;{footerInfo}</BlockElement>
    </BlockElement>
  );
}
