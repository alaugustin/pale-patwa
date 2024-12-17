import React from 'react';
import { dataLib } from './Data/data';
import { AppContentData } from './Data/AppContent';
import Header from './Components/Header/Header';
import WordOfTheDay from './Components/WordOfTheDay/WordOfTheDay';
import { ListItem } from './Components/List/ListItem/ListItem';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
import './styles.css';

const { headingH1 } = AppContentData.globalPageContent;
const sortedData = [...dataLib].sort(
  (a, b) => a.word.localeCompare(b.word)
);

document.title = headingH1;

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
        <Header />

        <main className="bg-yellow-400 pt-6 p-2 flex-1 flex items-center justify-center flex-col">
          <WordOfTheDay
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

        <Footer />
      </div>
    </>
  );
}
