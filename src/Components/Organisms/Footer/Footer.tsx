import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import Link from '../../UI/Link/Link';
import { IFooterProps } from './Footer.d';

const footerResourcesLink = AppContentData.footerContent.resources.link;
const { copyRight } = AppContentData.icons;

export default function Footer({
  footerContainerClass,
  currentYear,
  siteName
}: IFooterProps) {
  const footerInfo = `${currentYear} ${siteName}`;

  return (
    <BlockElement variant='footer' className={footerContainerClass}>
      <BlockElement className='flex flex-row mb-3'>{copyRight}&nbsp;{footerInfo}</BlockElement>
      <BlockElement className='flex flex-col mb-3'>
        <Typography variant='h3' className='font-bold text-slate-800 mb-2'>{'Resources'}</Typography>

        {footerResourcesLink.map((link, index) => (
          <Typography key={index} variant='p' className={'mb-1'}>
            <Link
              linkHref={link.href}
              linkTarget={link.target}
              linkClasses={'text-slate-700'}
              linkDownload={link.download}
              linkRel={link.rel}
              linkType={link.type}
            >
              {link.label}
            </Link>
            {link.pdfIcon && <Typography variant='span'>{link.pdfIcon}</Typography>}
          </Typography>
        ))}
      </BlockElement>
      <BlockElement className='flex flex-row'>🇱🇨🇩🇲🇬🇩🇹🇹🇭🇹🇬🇫🇻🇪🇻🇨</BlockElement>
    </BlockElement>
  );
}
