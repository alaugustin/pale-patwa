import React from 'react';
import { AppContentData } from '../../../../Data/AppContent';
import { Typography } from '../../../UI/Typography/Typography';
import Link from '../../../UI/Link/Link';
import { IResourceLinkProps, IResourceLinkDataProps } from './ResourcesLink.d';

const {
  pdfIcon,
  linkIcon
} = AppContentData.icons;
const {
  resourcesLinkIconClasses,
  resourcesLinkClass
} = AppContentData.uiClasses;

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
      const resourcesLinkIcon = icon === 'pdf' ? pdfIcon : icon === 'link' ? linkIcon(resourcesLinkIconClasses) : null;

      return (
        <Typography key={index} variant='p' className={resourcesLinkClass}>
          {icon &&
            <Typography
              variant='span'
              className='mr-1'
            >{resourcesLinkIcon}</Typography>}

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
