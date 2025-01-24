/**
 * Defines the properties of a word list data item.
 * @property {string} word - The word.
 * @property {string | number} definition - The definition of the word.
 * @property {string} egSentenceKw - The example sentence in the keyword language.
 * @property {string} egSentenceEn - The example sentence in English.
 * @property {string} etymology - The etymology of the word.
 * @property {string} variant - The variant of the word.
 */

export interface IWordListDataProps {
  word: string;
  definition: string | number;
  egSentenceKw: string;
  egSentenceEn: string;
  etymology: string;
  variant: string;
}

/**
 * Defines the props for the Wordlist component.
 * @property {IWordListDataProps[]} data - An array of word data objects.
 */

export interface IWordlistProps {
  data: IWordListDataProps[];
}
