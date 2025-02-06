import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import PronunciationList from './PronounciationList/PronounciationList';
import { IPronunciationsProps } from './Pronounciation.d';

const { phoneme } = AppContentData.pronounciationContent;

const {
  pronounciationListItemClasses,
  pronounciationListClasses
} = AppContentData.uiClasses;

export default function Pronunciations({
  className,
  titleH2
}: IPronunciationsProps) {
  return (
    <BlockElement id='wordPhonemes' variant='div' className={className}>
      <Typography variant='h2' className='text-3xl mb-6'>{titleH2}</Typography>

      <PronunciationList
        dataArr={phoneme}
        listClasses={pronounciationListClasses}
        listItemClasses={pronounciationListItemClasses}
      />
    </BlockElement>
  );
}
