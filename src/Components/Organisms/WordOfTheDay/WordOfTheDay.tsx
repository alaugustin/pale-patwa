import React, { useState, useEffect } from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { Typography } from '../../UI/Typography/Typography';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import WordAttributes from '../WordAttributes/WordAttributes';
import TwoCol from '../TwoCol/TwoCol';
import RenderElementHead from '../RenderElementHead/RenderElementHead';
import { IWordOfTheDayProps } from './WordOfTheDay.d';

const {
  wodTitleH2,
  wodContent,
} = AppContentData.wordOfTheDayContent;
const {
  wordOfTheDayContainerClasses,
  wordOfTheDayH3Classes,
  wordOfTheDayDefinitionClasses,
  calendarIconClasses
} = AppContentData.uiClasses;
const { date } = AppContentData.globalPageContent;
const { calendarIcon } = AppContentData.icons;

export default function WordOfTheDay(props: IWordOfTheDayProps) {
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState('');
  useEffect(() => {
    const dayOfMonth = date.getDate();
    setCurrentDayOfMonth(`${dayOfMonth}`);
  }, []);
  const renderCalendarIconText = parseInt(currentDayOfMonth) < 10 ? `0${'9'}` : currentDayOfMonth;

  const {
    kweyoleWord,
    dialect,
    etymology,
    partOfSpeech,
    definition
  } = props;

  const elementHeadLHS = <>
    <RenderElementHead
      elementTitle={wodTitleH2}
      copyData={wodContent}
      headingIcon={
        calendarIcon(
          calendarIconClasses,
          3,
          12,
          8,
          '262626',
          renderCalendarIconText
        )} />
  </>;

  const elementHeadRHS = <>
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
    >{Array.isArray(definition) ? definition.map((def: string, index: number) => (
        <Typography variant='span' className='mr-1 last:mr-0' key={index}>{def}{index !== definition.length - 1 ? ',' : ''}</Typography>
      )) : definition}</Typography>
  </>;

  const wodTwoColData = [ elementHeadLHS , elementHeadRHS ];

  return (
    <BlockElement variant='section' className={wordOfTheDayContainerClasses}>
      <TwoCol twoColData={wodTwoColData} />
    </BlockElement>
  );
}
