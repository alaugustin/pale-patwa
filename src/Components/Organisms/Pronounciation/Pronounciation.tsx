import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import PronunciationList from './PronounciationList/PronounciationList';
import RenderElementHead from '../RenderElementHead/RenderElementHead';
import { IPronunciationsProps } from './Pronounciation.d';

const { chatWithRDQuotIcon } = AppContentData.icons;

const { phoneme, blurb } = AppContentData.footerContent.ipaPronounciation;

const {
  pronounciationListItemClasses,
  pronounciationListClasses,
  pronounciationParagraphClasses,
  pronounciationHeadingClasses
} = AppContentData.uiClasses;

export default function Pronunciations({
  className,
  titleH2
}: IPronunciationsProps) {
  return (
    <BlockElement id='wordPhonemes' variant='div' className={className}>
      <RenderElementHead
        elementTitle={titleH2 || ''}
        copyWrapperClassName={pronounciationParagraphClasses}
        copyData={blurb}
        headingIcon={
          chatWithRDQuotIcon(pronounciationHeadingClasses)
        }
      />

      <PronunciationList
        dataArr={phoneme}
        listClasses={pronounciationListClasses}
        listItemClasses={pronounciationListItemClasses}
      />
    </BlockElement>
  );
}
