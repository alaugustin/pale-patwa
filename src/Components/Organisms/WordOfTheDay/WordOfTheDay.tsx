import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { Typography } from '../../Typography/Typography';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import WordAttributes from '../WordAttributes/WordAttributes';
import { IWordOfTheDayProps } from './WordOfTheDay.d';

const { wodTitleH2 } = AppContentData.wordOfTheDayContent;
const { flexItemsCenter } = AppContentData.uiClasses;

export default function WordOfTheDay(props: IWordOfTheDayProps) {
  const {
    kweyoleWord,
    dialect,
    etymology,
    partOfSpeech,
    definition
  } = props;

  return (
    <BlockElement variant='section' className={`${flexItemsCenter} flex-col pb-7 flex-3`}>
      <Typography
        variant="h2"
        className={'text-3xl mb-4'}
      >{wodTitleH2}</Typography>

      <Typography
        variant="h3"
        className={'text-3xl sm:text-6xl lg:text-8xl font-serif mb-2 font-bold'}
      >{kweyoleWord}</Typography>

      <WordAttributes
        wordEtymology={etymology ?? null}
        wordPartOfSpeech={partOfSpeech ?? null}
        wordDialect={dialect}
        containerClasses='text-xs md:text-sm mb-8'
      />

      <Typography
        variant="p"
        className="text-3xl sm:text-4xl lg:text-6xl font-thin"
      >{definition}</Typography>
    </BlockElement>
  );
}
