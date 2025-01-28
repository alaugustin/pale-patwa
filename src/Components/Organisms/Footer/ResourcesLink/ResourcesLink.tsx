import React from 'react';
import { Typography } from '../../../UI/Typography/Typography';
import Link from '../../../UI/Link/Link';
import { IResourceLinkProps, IResourceLinkDataProps } from './ResourcesLink.d';

export default function ResourcesLink({
  linkData,
  linkClasses
}: IResourceLinkProps) {

  return (
    linkData.map((
      link: IResourceLinkDataProps,
      index: React.Key | null | undefined
    ) => {
      const { label, href, target, download, rel, type } = link;

      return (
        <Typography key={index} variant='p' className='mb-2 last:mb-0 text-xs'>
          <Link
            linkHref={href}
            linkTarget={target}
            linkClasses={linkClasses}
            linkDownload={download ? '' : undefined}
            linkRel={rel}
            linkType={type}
          >{label}</Link>
        </Typography>
      );
    })
  );
}
