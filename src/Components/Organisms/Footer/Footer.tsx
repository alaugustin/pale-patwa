import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import Link from '../../UI/Link/Link';
import Pronunciations from '../Pronounciation/Pronounciation';
import { IFooterProps } from './Footer.d';

const { titleH2 } = AppContentData.footerContent.resources;
const { pronounciationTitleH2 } = AppContentData.pronounciationContent;
const footerResourcesLink = AppContentData.footerContent.resources.link;
const { copyRight } = AppContentData.icons;
const {
  pronounciationContainerClasses,
  copyRightContainerClasses,
  footerResourcesContinerClasses,
  footerResourcesTitleClasses,
  footerFlagSectionClasses
} = AppContentData.uiClasses;

export default function Footer({
  footerContainerClass,
  currentYear,
  siteName
}: IFooterProps) {
  const footerInfo = `${currentYear} ${siteName}`;

  return (
    <BlockElement variant='footer' className={footerContainerClass}>
      <Pronunciations className={pronounciationContainerClasses} titleH2={pronounciationTitleH2} />

      <BlockElement
        className={copyRightContainerClasses}>
        {copyRight}&nbsp;{footerInfo}
      </BlockElement>

      <BlockElement className={footerResourcesContinerClasses}>
        <Typography variant='h3' className={footerResourcesTitleClasses}>{titleH2}</Typography>

        {footerResourcesLink.map((link, index) => (
          <Typography key={index} variant='p' className={'mb-1'}>
            <Link
              linkHref={link.href}
              linkTarget={link.target}
              linkClasses={'text-slate-700 text-xs'}
              linkDownload={link.download}
              linkRel={link.rel}
              linkType={link.type}
            >
              {link.label}
            </Link>
          </Typography>
        ))}
      </BlockElement>

      <BlockElement
        className={footerFlagSectionClasses}>
          🇱🇨🇩🇲🇬🇩🇹🇹🇭🇹🇬🇫🇻🇪🇻🇨
      </BlockElement>
    </BlockElement>
  );
}
