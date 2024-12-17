import React from 'react';
import { dataLib } from './Data/data';
import { AppContentData, GlobalPageContent } from './Data/AppContent';
import WordOfTheDay from './Components/WordOfTheDay/WordOfTheDay';
import { Typography } from './Components/Typography/Typography';
import { ListItem } from './Components/List/ListItem/ListItem';
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
    <>
      <div id="allHolder" className="flex flex-col h-screen max-w-6xl mx-auto">
        <header className="bg-red-400 pt-6 p-2 basis-14 flex items-center">
          <Typography
            variant="h1"
            text={headingH1}
            className={'text-5xl mr-2'}
          />
          <span className='ml-2'>DAY_OF_WEEK, MONTH DAY_OF_MONTH, YEAR</span>
        </header>

        <main className="bg-yellow-400 pt-6 p-2 flex-1 flex items-center justify-center flex-col">
          <WordOfTheDay
            headingH2={titleH2}
            definition={definition}
            dialect={dialect}
            etymology={etymology}
            kweyoleWord={word}
            partOfSpeach={partOfSpeach}
          />

          <section>
            <ul className='flex max-w-4xl flex-wrap'>
              {dataLib.map((element, index) => (
                <ListItem
                  key={index}
                  word={element.word}
                  hasLink={true}
                  listItemClass='mr-2 mb-2'
                />
              ))}
            </ul>
          </section>
        </main>

        <footer className="bg-green-400 pt-6 p-2 basis-14 flex items-center">
          <div id="copyRight">&copy; 202X Footer</div>
        </footer>
      </div>
    </>
  );
}
