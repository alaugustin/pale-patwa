import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../Typography/Typography';
import { IWordAttributesProps } from './WordAttributes.d';

const borderClasses = 'pr-2 mr-2 border border-black border-t-0 border-b-0 border-l-0';

export default function WordAttributes({
  wordEtymology,
  wordPartOfSpeech,
  wordDialect,
  containerClasses
}: IWordAttributesProps) {

  return (
    <BlockElement variant='section' className={containerClasses}>
      <Typography
        variant="span"
        className={
          (wordEtymology || wordPartOfSpeech) ? `${borderClasses}` : ''
        } >{wordDialect}</Typography>

      {wordPartOfSpeech && (
        <Typography
          variant="span"
          className={
            (wordEtymology || wordPartOfSpeech)
              ? `${wordEtymology ? `${borderClasses}` : ''}`
              : ''
          } >{wordPartOfSpeech ?? ''}</Typography>
      )}

      {wordEtymology ?
        <Typography
          variant="span"
        >{wordEtymology ?? ''}</Typography> : ''
      }
    </BlockElement>
  );
}
