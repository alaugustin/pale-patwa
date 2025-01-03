import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { IFooterProps } from './Footer.d';

const { copyRight, pdfIcon } = AppContentData.icons;

export default function Footer({
  footerContainerClass,
  currentYear,
  siteName
}: IFooterProps) {
  const footerInfo = `${currentYear} ${siteName}`;

  return (
    <BlockElement variant='footer' className={footerContainerClass}>
      <BlockElement className='flex flex-row'>{copyRight}&nbsp;{footerInfo}</BlockElement>
      <BlockElement className='flex flex-col'>
        <Typography variant='h3' className='font-bold'>{'Resources'}</Typography>
        <Typography variant='p' className={'mb-2'}>
          <a href='http://www.saintluciancreole.dbfrank.net/dictionary/KweyolDictionary.pdf' target='_blank' rel='noreferrer noopener'>{'Kwéyòl Dictionary'}</a> - Ministry of Education, Government of Saint Lucia
          <Typography variant='span'>{pdfIcon}</Typography>
        </Typography>
        <Typography variant='p' className={'mb-2'}>
          <a href='https://www.webonary.org/kweyol/' target='_blank' rel='noreferrer noopener'>{'Kwéyòl Dictionary'}</a> - Webonary
        </Typography>
      </BlockElement>
      <BlockElement className='flex flex-row'>🇱🇨🇩🇲🇬🇩🇹🇹🇭🇹🇬🇫🇻🇪🇻🇨</BlockElement>
    </BlockElement>
  );
}
