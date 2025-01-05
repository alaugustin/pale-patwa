import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { Typography } from '../../UI/Typography/Typography';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import WordAttributes from '../WordAttributes/WordAttributes';
import { IWordOfTheDayProps } from './WordOfTheDay.d';

const { wodTitleH2 } = AppContentData.wordOfTheDayContent;
const {
  wordOfTheDayContainerClasses,
  wordOfTheDayH3Classes,
  wordOfTheDayDefinitionClasses
} = AppContentData.uiClasses;

export default function WordOfTheDay(props: IWordOfTheDayProps) {
  const {
    kweyoleWord,
    dialect,
    etymology,
    partOfSpeech,
    definition
  } = props;

  return (
    <BlockElement variant='section' className={wordOfTheDayContainerClasses}>
      <Typography
        variant="h2"
        className={'text-3xl mb-4'}
      >{wodTitleH2}</Typography>

      <Typography variant="p" className='mb-6 max-w-md'>{'Discover a new Kwéyòl word daily! Expand your Creole vocabulary with detailed etymology, usage examples, and cultural context - one word at a time.'}</Typography>

      <Typography
        variant="h3"
        className={wordOfTheDayH3Classes}
      >{kweyoleWord}</Typography>

      <WordAttributes
        wordEtymology={etymology ?? null}
        wordPartOfSpeech={partOfSpeech ?? null}
        wordDialect={dialect}
        containerClasses='text-xs md:text-sm mb-8'
      />

      <Typography
        variant="p"
        className={wordOfTheDayDefinitionClasses}
      >{definition}</Typography>
    </BlockElement>
  );
}
