import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import Pronunciations from '../Pronounciation/Pronounciation';
import ResourcesLink from './ResourcesLink/ResourcesLink';
import { IFooterProps } from './Footer.d';

const footerResourcesLinks = AppContentData.footerContent.resources.links;
const { titleH2, flags } = AppContentData.footerContent.resources;
const { pronounciationTitleH2 } = AppContentData.pronounciationContent;
const { copyright } = AppContentData.icons;

const {
  pronounciationContainerClasses,
  copyRightContainerClasses,
  footerResourcesContinerClasses,
  footerResourcesTitleClasses,
  footerFlagSectionClasses,
  footerResourcesLinkClasses,
  copyRightIconClasses
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
        {copyright(copyRightIconClasses)}&nbsp;{footerInfo}
      </BlockElement>

      <BlockElement className={footerResourcesContinerClasses}>
        <Typography
          variant='h3'
          className={footerResourcesTitleClasses}
        >{titleH2}</Typography>

        <ResourcesLink
          linkData={footerResourcesLinks}
          linkClasses={footerResourcesLinkClasses}
        />
      </BlockElement>

      <BlockElement className={footerFlagSectionClasses}>
        {flags.map((flag, index) => (
          <Typography key={index} variant='span' className='mr-2 last:mr-0'>{flag}</Typography>
        ))}
      </BlockElement>
    </BlockElement>
  );
}
