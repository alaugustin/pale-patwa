import React, { useState, useEffect } from 'react';
import { dataLib, SortedDictionary } from './Data/data';
import { AppContentData } from './Data/AppContent';
import Header from './Components/UI/Header/Header';
import { Main } from './Components/UI/Main/Main';
import Footer from './Components/UI/Footer/Footer';
import './styles.css';

const { mainHeading, date } = AppContentData.globalPageContent;

document.title = mainHeading;

export default function App() {
  const [randomItem, setRandomItem] = useState(SortedDictionary[0]);

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * SortedDictionary.length);
    setRandomItem(SortedDictionary[randomIndex]);
  };

  useEffect(() => {
    const interval = setInterval(getRandomItem, 5000);
    return () => clearInterval(interval);
  }, []);

  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    setYear(date.getFullYear());
  }, []);

  return (
    <>
      <div id="allHolder" className="flex flex-col h-screen max-w-6xl mx-auto">
        <Header headerContainerClass='bg-red-400 pt-6 p-2 basis-14 flex items-center justify-between' />

        <Main
          mainContainerClass='bg-yellow-400 pt-6 p-2 flex-1 flex items-center justify-center flex-col'
          wordOfTheDayData={randomItem}
          wordListData={dataLib}
        />

        <Footer
          footerContainerClass='bg-green-400 pt-6 p-2 basis-14 flex items-center'
          currentYear={year}
          siteName={mainHeading}
        />
      </div>
    </>
  );
}
