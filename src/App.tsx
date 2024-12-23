import React, { useState, useEffect } from 'react';
import { dataLib, SortedDictionary } from './Data/data';
import { AppContentData } from './Data/AppContent';
import Header from './Components/Organisms/Header/Header';
import { Main } from './Components/Organisms/Main/Main';
import Footer from './Components/Organisms/Footer/Footer';
import { BlockElement } from './Components/UI/BlockLevel/BlockElement';
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
      <BlockElement id='allHolder' className='flex flex-col h-screen max-w-6xl mx-auto'>
        <Header headerContainerClass='border-b border-gray-200 py-3 p-2 basis-14 flex items-center justify-between' />

        <Main
          mainContainerClass='pt-6 p-2 flex-1 flex items-center justify-center flex-col'
          wordOfTheDayData={randomItem}
          wordListData={dataLib}
        />

        <Footer
          footerContainerClass='border-t border-gray-200 pt-6 p-2 basis-14 flex items-center'
          currentYear={year}
          siteName={mainHeading}
        />
      </BlockElement>
    </>
  );
}
