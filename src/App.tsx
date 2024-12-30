import React, { useState, useEffect } from 'react';
import { dataLib, SortedDictionary } from './Data/data';
import { AppContentData } from './Data/AppContent';
import Header from './Components/Organisms/Header/Header';
import { Main } from './Components/Organisms/Main/Main';
import Footer from './Components/Organisms/Footer/Footer';
import { BlockElement } from './Components/UI/BlockLevel/BlockElement';
import Button from './Components/UI/Form/Button/Button';
import { IWordListDataProps } from './Components/Organisms/Wordlist/Wordlist.d';
import './styles.css';

const { mainHeading, date, backToTopLabel } = AppContentData.globalPageContent;
const {
  flexItemsCenter,
  flexCol,
  backToTopButton,
  backToTopButtonIcon
} = AppContentData.uiClasses;

document.title = mainHeading;

export default function App() {
  const [randomItem, setRandomItem] = useState<IWordListDataProps & { dialect: string }>(SortedDictionary[0] as IWordListDataProps & { dialect: string });

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * SortedDictionary.length);
    setRandomItem(SortedDictionary[randomIndex] as IWordListDataProps & { dialect: string });
  };

  useEffect(() => {
    getRandomItem();

    const dayInterval = setInterval(() => {
      const now = new Date();
      const midnight = new Date(now);
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

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <BlockElement id='allHolder' className={`${flexCol} h-screen max-w-6xl mx-auto text-slate-900`}>
        <Header headerContainerClass={`${flexItemsCenter} border-b border-gray-200 py-3 p-2 basis-14 justify-between`} />

        <Main
          mainContainerClass={`${flexItemsCenter} flex-1 flex-col`}
          wordOfTheDayData={randomItem}
          wordListData={dataLib as IWordListDataProps[]}
        />

        <Footer
          footerContainerClass={'flex border-t border-gray-200 pt-6 p-2 basis-14'}
          currentYear={year}
          siteName={mainHeading}
        />

        {showBackToTop && (
          <Button
            buttonClass={backToTopButton}
            buttonLabel={<>
              <svg className={backToTopButtonIcon} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title /><path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM363.31,307.31a16,16,0,0,1-22.62,0L256,222.63l-84.69,84.68a16,16,0,0,1-22.62-22.62l96-96a16,16,0,0,1,22.62,0l96,96A16,16,0,0,1,363.31,307.31Z" /></svg>
              <span>{backToTopLabel}</span>
            </>}
            onClickFunc={scrollToTop}
          />
        )}
      </BlockElement>
    </>
  );
}
