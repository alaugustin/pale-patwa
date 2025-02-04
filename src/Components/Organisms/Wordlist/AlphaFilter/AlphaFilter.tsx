import React from 'react';
import { AppContentData } from '../../../../Data/AppContent';
import { BlockElement } from '../../../UI/BlockLevel/BlockElement';
import Button from '../../../UI/Form/Button/Button';
import { IAlphaFilterProps } from './AlphaFilter.d';

const { alphabetFilterClasses } = AppContentData.uiClasses;

export default function AlphaFilter({ alphabetCollection }: IAlphaFilterProps) {

  return (
    <>
      <BlockElement id='alphabet-filter' className='flex flex-wrap flex-row mb-4'>
        {alphabetCollection?.split('').map((letter, index) => (
          <Button
            key={index}
            buttonClass={alphabetFilterClasses}
            buttonLabel={letter}
          />
        ))}
      </BlockElement>
    </>
  );
}
