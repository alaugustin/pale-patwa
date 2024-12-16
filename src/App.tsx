import React from 'react';
import { dataLib } from './Data/data';
import { AppContentData, GlobalPageContent } from './Data/AppContent';
import { Typography } from './Components/Typography/Typography';
import { useState, useEffect } from 'react';
import './styles.css';

const { headingH1 } = GlobalPageContent;
const { titleH2 } = AppContentData.WordOfTheDayContent;

const sortedData = [...dataLib].sort(
  (a, b) => a.word.localeCompare(b.word)
);

export default function App() {
  const borderClasses = 'pr-2 mr-2 border border-black border-t-0 border-b-0 border-l-0';
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
      <Typography
        variant="h1"
        text={headingH1}
        className={'text-5xl mb-20'}
      />

      <Typography
        variant="h2"
        text={titleH2}
        className={'text-3xl mb-4'}
      />

      <Typography
        variant="h3"
        text={word}
        className={'text-8xl font-serif mb-36'}
      />

      <section className="text-sm mb-5">
        <Typography
          variant="span"
          text={dialect}
          className={
            (etymology || partOfSpeach) ? `${borderClasses}` : ''
          } />

        {partOfSpeach && (
          <Typography
            variant="span"
            text={partOfSpeach ?? ''}
            className={
              (etymology || partOfSpeach) ? `${etymology ? `${borderClasses}` : ''}` : ''
            } />
        )}

        {randomItem.etymology ?
          <Typography
            variant="span"
            text={etymology ?? ''}
          /> : ''
        }
      </section>

      <Typography
        variant="p"
        text={definition}
        className="text-6xl font-thin"
      />
    </main>
  );
}
