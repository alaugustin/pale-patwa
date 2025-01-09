import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import Link from '../../UI/Link/Link';
import Pronunciations from '../Pronounciation/Pronounciation';
import { IFooterProps } from './Footer.d';

const footerResourcesLink = AppContentData.footerContent.resources.link;
const { titleH2 } = AppContentData.footerContent.resources;
const { pronounciationTitleH2 } = AppContentData.pronounciationContent;
const { copyRight } = AppContentData.icons;
const {
  pronounciationContainerClasses,
  copyRightContainerClasses,
  footerResourcesContinerClasses,
  footerResourcesTitleClasses,
  footerFlagSectionClasses,
  footerResourcesLinkClasses,
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

        {footerResourcesLink.map((link, index) => {
          const { label, href, target, download, rel, type } = link;
          return (
            <Typography key={index} variant='p' className='mb-1 text-xs'>
              <Link
                linkHref={href}
                linkTarget={target}
                linkClasses={footerResourcesLinkClasses}
                linkDownload={download}
                linkRel={rel}
                linkType={type}
              >{label}</Link>
            </Typography>
          );
        })}
      </BlockElement>

      <BlockElement
        className={footerFlagSectionClasses}>
          🇱🇨🇩🇲🇬🇩🇹🇹🇭🇹🇬🇫🇻🇪🇻🇨
      </BlockElement>
    </BlockElement>
  );
}
