import React, { useState, useEffect } from 'react';
import { dataLib, SortedDictionary } from './Data/data';
import { AppContentData } from './Data/AppContent';
import Header from './Components/Organisms/Header/Header';
import { Main } from './Components/Organisms/Main/Main';
import Footer from './Components/Organisms/Footer/Footer';
import { BlockElement } from './Components/UI/BlockLevel/BlockElement';
import Link from './Components/UI/Link/Link';
import { IWordListDataProps } from './Components/Organisms/Wordlist/Wordlist.types';
import './styles.css';

const {
  mainHeading,
  date,
  skipLinkLabel,
  skipLinkHref
} = AppContentData.globalPageContent;

const {
  appAllHolderClasses,
  headerContainerClasses,
  footerContainerClasses,
  skipLinkClasses,
  mainContainerClasses
} = AppContentData.uiClasses;

export default function App() {
  /**
   * Initializes the `year` state with the current year from the `date` object, and updates the `year` state with the current year on component mount.
   * This ensures that the year displayed in the application is always up-to-date.
   */
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    setYear(date.getFullYear());
    document.title = `${mainHeading} | Online Dictionary`;
  }, []);

  const [currentWord, setCurrentWord] = useState<typeof SortedDictionary[number] | null>(null);

  const checkAndUpdateDailyWord = () => {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('lastWordDate');

    if (!storedDate || storedDate !== today) {
      const randomIndex = Math.floor(Math.random() * SortedDictionary.length);
      const newWord = SortedDictionary[randomIndex];
      setCurrentWord(newWord);

      localStorage.setItem('lastWordDate', today);
      localStorage.setItem('currentWord', JSON.stringify(newWord));
    } else {

      const savedWord = JSON.parse(localStorage.getItem('currentWord') || '{}');
      setCurrentWord(savedWord);
    }
  };

  useEffect(() => {
    checkAndUpdateDailyWord();

    const now = new Date();
    const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0);
    const timeUntilNextHour = nextHour.getTime() - now.getTime();

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      checkAndUpdateDailyWord();
      intervalId = setInterval(checkAndUpdateDailyWord, 3600000);
    }, timeUntilNextHour);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Link
        linkHref={skipLinkHref}
        linkClasses={skipLinkClasses}
      >{skipLinkLabel}</Link>

      <BlockElement id='allHolder' variant='main' role="main" className={appAllHolderClasses}>
        <Header headerContainerClass={headerContainerClasses} mainHeading={mainHeading} />

        <Main
          mainContainerClass={mainContainerClasses}
          wordOfTheDayData={{
            word: currentWord?.word || '',
            dialect: currentWord?.dialect || '',
            etymology: currentWord?.etymology || '',
            partOfSpeech: currentWord?.partOfSpeech || '',
            definition: currentWord?.definition ?? []
          }}
          wordListData={dataLib as unknown as IWordListDataProps[]}
        />

        <Footer
          footerContainerClass={footerContainerClasses}
          currentYear={year}
          siteName={mainHeading}
        />
      </BlockElement>
    </>
  );
}
