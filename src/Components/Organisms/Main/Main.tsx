import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import WordOfTheDay from '../WordOfTheDay/WordOfTheDay';
import WordList from '../Wordlist/Wordlist';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import Pronounciation from '../Pronounciation/Pronounciation';
import { IMainProps } from './Main.d';

const { pronounciationContainerClasses } = AppContentData.uiClasses;
const { titleH2 } = AppContentData.pronounciationContent;

export const Main = ({
  mainContainerClass,
  wordOfTheDayData,
  wordListData
}: IMainProps) => {
  const {
    definition,
    dialect,
    etymology,
    word,
    partOfSpeech
  } = wordOfTheDayData;

  return (
    <BlockElement variant='main' className={mainContainerClass}>
      <WordOfTheDay
        definition={definition}
        dialect={dialect}
        etymology={etymology}
        kweyoleWord={word}
        partOfSpeech={partOfSpeech}
      />

      <WordList data={wordListData} />

      <Pronounciation
        className={pronounciationContainerClasses}
        titleH2={titleH2}
      />

    </BlockElement>
  );
};
