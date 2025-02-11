import React from 'react';
import { AppContentData } from '../../../../Data/AppContent';
import { Typography } from '../../../UI/Typography/Typography';
import Link from '../../../UI/Link/Link';
import { IResourceLinkProps, IResourceLinkDataProps } from './ResourcesLink.d';

const { pdfIcon } = AppContentData.icons;

export default function ResourcesLink({
  linkData,
  linkClasses
}: IResourceLinkProps) {

  return (
    linkData.map((
      link: IResourceLinkDataProps,
      index: React.Key | null | undefined
    ) => {
      const { label, href, target, download, rel, type, icon } = link;

      return (
        <Typography key={index} variant='p' className='mb-2 last:mb-0 text-xs flex'>
          <Link
            linkHref={href}
            linkTarget={target}
            linkClasses={linkClasses}
            linkDownload={download ? '' : undefined}
            linkRel={rel}
            linkType={type}
          >{label}</Link>

          {icon &&
            <Typography variant='span' className='ml-1'>{pdfIcon}</Typography>}
        </Typography>
      );
    })
  );
}
