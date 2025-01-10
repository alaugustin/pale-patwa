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

export default function WordOfTheDay(props: IWordOfTheDayProps) {
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState('');
  useEffect(() => {
    const dayOfMonth = date.getDate();
    setCurrentDayOfMonth(`${dayOfMonth}`);
  }, []);

  const {
    kweyoleWord,
    dialect,
    etymology,
    partOfSpeech,
    definition
  } = props;

  // const renderCalendarIconText = parseInt(currentDayOfMonth) > 10 ? currentDayOfMonth : `0${currentDayOfMonth}`;

  const calendarIcon = (
    iconClasses: string,
    iconXOffset: number,
    iconYOffset: number,
    iconTextFontSize: number,
    iconFillColor: string,
  ) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`${iconClasses} mt-1`} viewBox="0 0 16 16">
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
      <text
        x={iconXOffset}
        y={iconYOffset}
        fontSize={iconTextFontSize}
        fill={`#${iconFillColor}`}
      >{currentDayOfMonth}</text>
    </svg>
  );

  const wodTwoColData = [
    <>
      <RenderElementHead
        elementTitle={wodTitleH2}
        copyData={wodContent}
        headingIcon={calendarIcon(calendarIconClasses, 3, 12, 8, '262626')}
      />
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
