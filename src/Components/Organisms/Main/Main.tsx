import React from 'react';
import WordOfTheDay from '../WordOfTheDay/WordOfTheDay';
import WordList from '../Wordlist/Wordlist';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IMainProps } from './Main.d';

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
    <BlockElement variant='section' className={mainContainerClass}>
      <WordOfTheDay
        definition={definition}
        dialect={dialect}
        etymology={etymology}
        kweyolWord={word}
        partOfSpeech={partOfSpeech}
      />

      <WordList data={wordListData} />
    </BlockElement>
  );
};
