import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { Pronounciation } from '../../../Data/Pronounciation';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { IPronunciationsProps } from './Pronounciation.d';

const {
  pronounciationListItemClasses,
  pronounciationListClasses
} = AppContentData.uiClasses;

export default function Pronunciations({
  className,
  titleH2
}: IPronunciationsProps) {
  return (
    <BlockElement variant='div' className={className}>
      <Typography variant='h2' className='text-3xl mb-6'>{titleH2}</Typography>

      <ul className={pronounciationListClasses}>
        {Pronounciation.map((item, index) => (
          <li key={index} className={pronounciationListItemClasses}>
            <span>{item.letter}</span>
            <span>{item.pronounciation}</span>
            <span>{item.sound}</span>
          </li>
        ))}
      </ul>
    </BlockElement>
  );
}
