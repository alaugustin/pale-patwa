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

const {
  mainHeading,
  date,
  backToTopLabel
} = AppContentData.globalPageContent;
const {
  backToTopButton,
  appAllHolderClasses,
  headerContainerClasses,
  footerContainerClasses
} = AppContentData.uiClasses;
const {flexItemsCenter} = AppContentData.uiHelperClasses;

const { backToTopIcon } = AppContentData.icons;

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
      <BlockElement id='allHolder' className={appAllHolderClasses}>
        <Header headerContainerClass={headerContainerClasses} mainHeading={mainHeading} />

        <Main
          mainContainerClass={`${flexItemsCenter} flex-1 flex-col`}
          wordOfTheDayData={randomItem}
          wordListData={dataLib as IWordListDataProps[]}
        />

        <Footer
          footerContainerClass={footerContainerClasses}
          currentYear={year}
          siteName={mainHeading}
        />

        {showBackToTop && (
          <Button
            buttonClass={backToTopButton}
            buttonLabel={<>
              {backToTopIcon}
              <span>{backToTopLabel}</span>
            </>}
            onClickFunc={scrollToTop}
          />
        )}
      </BlockElement>
    </>
  );
}
