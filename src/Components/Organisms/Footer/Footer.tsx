import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import Link from '../../UI/Link/Link';
import { IFooterProps } from './Footer.d';

const footerResourcesLink = AppContentData.footerContent.resources.link;
const { copyRight } = AppContentData.icons;
const { footerColClasses } = AppContentData.uiClasses;

export default function Footer({
  footerContainerClass,
  currentYear,
  siteName
}: IFooterProps) {
  const footerInfo = `${currentYear} ${siteName}`;

  return (
    <BlockElement variant='footer' className={footerContainerClass}>
      <BlockElement className={`${footerColClasses} order-last md:order-first`}>{copyRight}&nbsp;{footerInfo}</BlockElement>
      <BlockElement className='flex basis-full flex-col mb-4 md:mb-0 md:px-4 md:basis-1/2'>
        <Typography variant='h3' className='font-bold text-slate-800 text-sm mb-1'>{'Resources'}</Typography>

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
      <BlockElement className={`${footerColClasses} mb-4 md:mb-0 md:justify-end order-first md:order-last`}>🇱🇨🇩🇲🇬🇩🇹🇹🇭🇹🇬🇫🇻🇪🇻🇨</BlockElement>
    </BlockElement>
  );
}
