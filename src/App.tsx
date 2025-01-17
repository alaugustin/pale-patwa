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
  footerContainerClasses,
  backToTopIconClasses
} = AppContentData.uiClasses;
const { flexItemsCenter } = AppContentData.uiHelperClasses;
const { backToTopIcon } = AppContentData.icons;

document.title = mainHeading;

export default function App() {
  /**
   * Initializes the `year` state with the current year from the `date` object, and updates the `year` state with the current year on component mount.
   * This ensures that the year displayed in the application is always up-to-date.
   */
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    setYear(date.getFullYear());
  }, []);

  /**
   * Manages the visibility of a "Back to Top" button based on the user's scroll position.
   *
   * The `showBackToTop` state is initialized to `false`, and is updated to `true` when the user scrolls more than 200 pixels down the page.
   * This triggers the display of the "Back to Top" button, which allows the user to smoothly scroll back to the top of the page.
   *
   * The `scrollToTop` function is used to handle the click event on the "Back to Top" button, scrolling the page back to the top with a smooth animation.
   */
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

  /**
   * Manages the state of the current word displayed in the application.
   *
   * The `currentWord` state is initialized to `null` and is updated with a random word from the `SortedDictionary` array when the component mounts or when the current date changes.
   *
   * The `checkAndUpdateDailyWord` function is responsible for checking the last time the word was updated, and updating the `currentWord` state accordingly. If the current date is different from the last stored date, a new random word is selected and stored in the local storage. Otherwise, the previously stored word is retrieved and set as the `currentWord`.
   *
   * This ensures that the user sees a new word every day when they visit the application.
   */
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

    // Calculate milliseconds until next hour
    const now = new Date();
    const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0);
    const timeUntilNextHour = nextHour.getTime() - now.getTime();

    // Initial timeout to sync with the hour
    const initialTimeout = setTimeout(() => {
      checkAndUpdateDailyWord();

      // Then start the regular hourly interval
      const intervalId = setInterval(checkAndUpdateDailyWord, 3600000);
      console.log('hourly check executed', intervalId);

      return () => clearInterval(intervalId);
    }, timeUntilNextHour);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <>
      <BlockElement id='allHolder' className={appAllHolderClasses}>
        <Header headerContainerClass={headerContainerClasses} mainHeading={mainHeading} />

        <Main
          mainContainerClass={`${flexItemsCenter} flex-1 flex-col`}
          wordOfTheDayData={{
            word: currentWord?.word || '',
            dialect: currentWord?.dialect || '',
            etymology: currentWord?.etymology || '',
            partOfSpeech: currentWord?.partOfSpeech || '',
            definition: currentWord?.definition ? currentWord.definition.toString() : ''
          }}
          wordListData={dataLib as unknown as IWordListDataProps[]}
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
              {backToTopIcon(backToTopIconClasses)}
              <span>{backToTopLabel}</span>
            </>}
            onClickFunc={scrollToTop}
          />
        )}
      </BlockElement>
    </>
  );
}
