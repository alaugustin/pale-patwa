import React from 'react';
import { dataLib } from './Data/data';
import { AppContentData, GlobalPageContent } from './Data/AppContent';
import WordOfTheDay from './Components/WordOfTheDay/WordOfTheDay';
import { Typography } from './Components/Typography/Typography';
import { useState, useEffect } from 'react';
import './styles.css';

const { headingH1 } = GlobalPageContent;
const { titleH2 } = AppContentData.WordOfTheDayContent;

const sortedData = [...dataLib].sort(
  (a, b) => a.word.localeCompare(b.word)
);

export default function App() {
  const [randomItem, setRandomItem] = useState(sortedData[0]);

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * sortedData.length);
    setRandomItem(sortedData[randomIndex]);
  };

  const { word, dialect, definition, partOfSpeach, etymology } = randomItem;

  useEffect(() => {
    const interval = setInterval(getRandomItem, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex items-center justify-center h-screen flex-col">
      <header>
        <Typography
          variant="h1"
          text={headingH1}
          className={'text-5xl mb-20'}
        />
      </header>

      <WordOfTheDay
        headingH2={titleH2}
        kweyoleWord={word}
        dialect={dialect}
        partOfSpeach={partOfSpeach}
        etymology={etymology}
        definition={definition}
      />
    </main>
  );
}
