import React, { useState, useEffect } from 'react';
import { dataLib, SortedDictionary } from './Data/data';
import { AppContentData } from './Data/AppContent';
import Header from './Components/Organisms/Header/Header';
import { Main } from './Components/Organisms/Main/Main';
import Footer from './Components/Organisms/Footer/Footer';
import { BlockElement } from './Components/UI/BlockLevel/BlockElement';
import './styles.css';

const { mainHeading, date } = AppContentData.globalPageContent;
const { flexItemsCenter, flexCol } = AppContentData.uiClasses;

document.title = mainHeading;

export default function App() {
  const [randomItem, setRandomItem] = useState(SortedDictionary[0]);

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * SortedDictionary.length);
    setRandomItem(SortedDictionary[randomIndex]);
  };

  useEffect(() => {
    const dayInterval = setInterval(() => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const timeUntilMidnight = midnight.getTime() - now.getTime();

      getRandomItem();
      clearInterval(dayInterval);

      setTimeout(() => {
        getRandomItem();
        setInterval(getRandomItem, 24 * 60 * 60 * 1000);
      }, timeUntilMidnight);
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(dayInterval);
  }, []);

  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    setYear(date.getFullYear());
  }, []);

  return (
    <>
      <BlockElement id='allHolder' className={`${flexCol} h-screen max-w-6xl mx-auto`}>
        <Header headerContainerClass={`${flexItemsCenter} border-b border-gray-200 py-3 p-2 basis-14 justify-between`} />

        <Main
          mainContainerClass={`${flexItemsCenter} pt-6 p-2 flex-1 flex-col`}
          wordOfTheDayData={randomItem}
          wordListData={dataLib}
        />

        <Footer
          footerContainerClass={'flex border-t border-gray-200 pt-6 p-2 basis-14'}
          currentYear={year}
          siteName={mainHeading}
        />
      </BlockElement>
    </>
  );
}
