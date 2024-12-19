import React from 'react';
import { Typography } from '../../Typography/Typography';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import WordAttributes from '../WordAttributes/WordAttributes';
import { IWordOfTheDayProps } from './WordOfTheDay.d';

const { wodTitleH2 } = AppContentData.wordOfTheDayContent;

export default function WordOfTheDay(props: IWordOfTheDayProps) {
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

      <WordAttributes
        wordEtymology={etymology ?? null}
        wordPartOfSpeech={partOfSpeech ?? null}
        wordDialect={dialect}
        containerClasses='text-sm mb-8'
      />

      <Typography
        variant="p"
        className="text-6xl font-thin"
      >{definition}</Typography>
    </BlockElement>
  );
}
