import React from 'react';
import WordOfTheDay from '../WordOfTheDay/WordOfTheDay';
import WordList from '../Wordlist/Wordlist';
import { IMainProps } from './Main.d';

export const Main = ({ mainContainerClass, wordOfTheDayData, wordListData }: IMainProps) => {
  const {
    definition,
    dialect,
    etymology,
    word,
    partOfSpeech
  } = wordOfTheDayData;

  return (
    <main className={mainContainerClass}>
      <WordOfTheDay
        definition={definition}
        dialect={dialect}
        etymology={etymology}
        kweyoleWord={word}
        partOfSpeech={partOfSpeech}
      />

      <WordList data={wordListData} />
    </main>
  );
};
