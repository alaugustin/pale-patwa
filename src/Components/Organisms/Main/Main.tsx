import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import WordOfTheDay from '../WordOfTheDay/WordOfTheDay';
import WordList from '../Wordlist/Wordlist';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import Pronounciation from '../Pronounciation/Pronounciation';
import { IMainProps } from './Main.d';

const { blockElementPadding } = AppContentData.uiHelperClasses;


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

      <Pronounciation className={`${blockElementPadding} max-w-4xl`} />

      <WordList data={wordListData} />
    </BlockElement>
  );
};
