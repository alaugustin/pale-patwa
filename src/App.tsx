import React, { useState, useEffect } from 'react';
import { dataLib, SortedDictionary } from './Data/data';
import { AppContentData } from './Data/AppContent';
import Header from './Components/Organisms/Header/Header';
import { Main } from './Components/Organisms/Main/Main';
import Footer from './Components/Organisms/Footer/Footer';
import { BlockElement } from './Components/UI/BlockLevel/BlockElement';
import Button from './Components/UI/Form/Button/Button';
import Link from './Components/UI/Link/Link';
import { IWordListDataProps } from './Components/Organisms/Wordlist/Wordlist.d';
import './styles.css';

const { backToTopIcon } = AppContentData.icons;

const {
  mainHeading,
  date,
  backToTopLabel,
  skipLinkLabel,
  skipLinkHref,
  backToTopAriaLabel
} = AppContentData.globalPageContent;

const {
  backToTopButton,
  appAllHolderClasses,
  headerContainerClasses,
  footerContainerClasses,
  backToTopIconClasses,
  skipLinkClasses,
  mainContainerClasses
} = AppContentData.uiClasses;

document.title = `${mainHeading}  | Online Dictionary`;

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
    * Manages the state of the "Back to Top" button visibility based on the user's scroll position.
    *
    * The `showBackToTop` state is initialized to `false` and is updated to `true` when the user scrolls past the halfway point of the page. This is determined by checking the position of the `wordPhonemes` element relative to the window height.
    *
    * The `handleScroll` function is called whenever the user scrolls the page, and it updates the `showBackToTop` state accordingly.
    *
    * The `useEffect` hook is used to add and remove the `scroll` event listener when the component mounts and unmounts, respectively.
    */

  const handleScroll = () => {
    const element = document.getElementById('wordPhonemes');

    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setShowBackToTop(rect.top <= windowHeight / 2);
    }
  };
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
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

    const now = new Date();
    const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0);
    const timeUntilNextHour = nextHour.getTime() - now.getTime();

    const initialTimeout = setTimeout(() => {
      checkAndUpdateDailyWord();

      const intervalId = setInterval(checkAndUpdateDailyWord, 3600000);

      return () => clearInterval(intervalId);
    }, timeUntilNextHour);

    return () => clearTimeout(initialTimeout);
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
            ariaLabel={backToTopAriaLabel}
            onClickFunc={scrollToTop}
          />
        )}
      </BlockElement>
    </>
  );
}
