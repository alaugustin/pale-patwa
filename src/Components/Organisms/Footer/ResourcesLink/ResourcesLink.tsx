import React from 'react';
import { Typography } from '../../../UI/Typography/Typography';
import Link from '../../../UI/Link/Link';
import {IResourceLinkProps} from './ResourcesLink.d';

export default function ResourcesLink({
  linkData,
  linkClasses
}: IResourceLinkProps) {

  return (
    linkData.map((link: { label: any; href: any; target: any; download: any; rel: any; type: any; }, index: React.Key | null | undefined) => {
      const { label, href, target, download, rel, type } = link;
      return (
        <Typography key={index} variant='p' className='mb-1 text-xs'>
          <Link
            linkHref={href}
            linkTarget={target}
            linkClasses={linkClasses}
            linkDownload={download}
            linkRel={rel}
            linkType={type}
          >{label}</Link>
        </Typography>
      );
    })
  );
}
