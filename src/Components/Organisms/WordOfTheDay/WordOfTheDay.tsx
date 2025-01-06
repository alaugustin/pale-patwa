import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { Typography } from '../../UI/Typography/Typography';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import WordAttributes from '../WordAttributes/WordAttributes';
import TwoCol from '../TwoCol/TwoCol';
import { IWordOfTheDayProps } from './WordOfTheDay.d';

const { wodTitleH2, wodContent } = AppContentData.wordOfTheDayContent;
const {
  wordOfTheDayContainerClasses,
  wordOfTheDayH3Classes,
  wordOfTheDayDefinitionClasses,
  centeredBlurbCopyClasses
} = AppContentData.uiClasses;

export default function WordOfTheDay(props: IWordOfTheDayProps) {
  const {
    kweyoleWord,
    dialect,
    etymology,
    partOfSpeech,
    definition
  } = props;

  const wodTwoColData = [
    <>
      <Typography
        variant="h2"
        className={'text-3xl mb-4'}
      >{wodTitleH2}</Typography>

      <BlockElement className={centeredBlurbCopyClasses}>{
        wodContent.map((blurbCopy, index) => (
          <Typography
            key={index}
            className='mb-2 last:mb-0 text-left'
          >{blurbCopy}</Typography>
        ))
      }</BlockElement>
    </>, <>
      <Typography
        variant="h3"
        className={wordOfTheDayH3Classes}
      >{kweyoleWord}</Typography>

      <WordAttributes
        wordEtymology={etymology ?? null}
        wordPartOfSpeech={partOfSpeech ?? null}
        wordDialect={dialect}
        containerClasses='text-xs mb-2 md:text-right'
      />

      <Typography
        variant="p"
        className={wordOfTheDayDefinitionClasses}
      >{definition}</Typography>
    </>
  ];

  return (
    <BlockElement variant='section' className={wordOfTheDayContainerClasses}>
      <TwoCol twoColData={wodTwoColData} />
    </BlockElement>
  );
}
