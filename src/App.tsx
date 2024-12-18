import React, { useState, useEffect } from 'react';
import { dataLib, SortedDictionary } from './Data/data';
import { AppContentData } from './Data/AppContent';
import Header from './Components/Header/Header';
import WordOfTheDay from './Components/WordOfTheDay/WordOfTheDay';
import WordList from './Wordlist';
import Footer from './Components/Footer/Footer';
import './styles.css';

const { mainHeading } = AppContentData.globalPageContent;

document.title = mainHeading;

export default function App() {
  const [randomItem, setRandomItem] = useState(SortedDictionary[0]);

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * SortedDictionary.length);
    setRandomItem(SortedDictionary[randomIndex]);
  };

  const { word, dialect, definition, partOfSpeech, etymology } = randomItem;

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
            partOfSpeech={partOfSpeech}
          />

          <WordList data={dataLib} />
        </main>

        <Footer />
      </div>
    </>
  );
}
