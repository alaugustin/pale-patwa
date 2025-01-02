import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { IWordAttributesProps } from './WordAttributes.d';

const { wordAttributeBorder } = AppContentData.uiClasses;

export default function WordAttributes({
  wordEtymology,
  wordPartOfSpeech,
  wordDialect,
  containerClasses
}: IWordAttributesProps) {

  return (
    <BlockElement variant='div' className={containerClasses}>
      <Typography
        variant="span"
        className={`${wordPartOfSpeech && wordAttributeBorder}`} >{wordDialect}</Typography>

      {wordPartOfSpeech && (
        <Typography
          variant="span"
          className={`font-mono text-xs ${wordEtymology && wordAttributeBorder}`}
        >{wordPartOfSpeech ?? ''}</Typography>
      )}

      {wordEtymology ?
        <Typography
          variant="span"
        >{wordEtymology ?? ''}</Typography> : ''
      }
    </BlockElement>
  );
}
