import React from 'react';
import { Typography } from '../../Typography/Typography';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IWordOfTheDayProps } from './WordOfTheDay.d';

const { wodTitleH2 } = AppContentData.wordOfTheDayContent;

export default function WordOfTheDay(props: IWordOfTheDayProps) {
  const borderClasses = 'pr-2 mr-2 border border-black border-t-0 border-b-0 border-l-0';
  const {
    kweyoleWord,
    dialect,
    etymology,
    partOfSpeech,
    definition
  } = props;

  return (
    <BlockElement variant='section' className='flex items-center justify-center flex-col mb-10'>
      <Typography
        variant="h2"
        className={'text-3xl mb-4'}
      >{wodTitleH2}</Typography>

      <Typography
        variant="h3"
        className={'text-8xl font-serif mb-2 font-bold'}
      >{kweyoleWord}</Typography>

      <BlockElement variant='section' className='text-sm mb-8'>
        <Typography
          variant="span"
          className={
            (etymology || partOfSpeech) ? `${borderClasses}` : ''
          } >{dialect}</Typography>

        {partOfSpeech && (
          <Typography
            variant="span"
            className={
              (etymology || partOfSpeech) ? `${etymology ? `${borderClasses}` : ''}` : ''
            } >{partOfSpeech ?? ''}</Typography>
        )}

        {etymology ?
          <Typography
            variant="span"
          >{etymology ?? ''}</Typography> : ''
        }
      </BlockElement>

      <Typography
        variant="p"
        className="text-6xl font-thin"
      >{definition}</Typography>
    </BlockElement>
  );
}
