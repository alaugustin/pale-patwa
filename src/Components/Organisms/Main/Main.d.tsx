import { IWordListDataProps } from '../Wordlist/Wordlist.d';

/**
 * Defines the props interface for the Main component.
 *
 * @property {string} mainContainerClass - The CSS class name for the main container.
 * @property {object} wordOfTheDayData - An object containing data for the word of the day.
 * @property {string} wordOfTheDayData.word - The word of the day.
 * @property {string} wordOfTheDayData.dialect - The dialect of the word of the day.
 * @property {string|number} wordOfTheDayData.definition - The definition of the word of the day.
 * @property {string|null} [wordOfTheDayData.partOfSpeech] - The part of speech of the word of the day.
 * @property {string|null} [wordOfTheDayData.etymology] - The etymology of the word of the day.
 * @property {string|null} [wordOfTheDayData.egSentenceKw] - The example sentence in the keyword language for the word of the day.
 * @property {string|null} [wordOfTheDayData.egSentenceEn] - The example sentence in English for the word of the day.
 * @property {IWordListDataProps[]} wordListData - An array of word list data props.
 */

export interface IMainProps {
  mainContainerClass: string;
  wordOfTheDayData: {
    word: string;
    dialect: string;
    definition: string | number;
    partOfSpeech?: string | null;
    etymology?: string | null;
    egSentenceKw?: string | null;
    egSentenceEn?: string | null;
  };
  wordListData: IWordListDataProps[];
}
