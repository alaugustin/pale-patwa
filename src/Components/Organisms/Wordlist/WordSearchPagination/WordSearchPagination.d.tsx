/**
 * Defines the properties of a word list data object, which includes the word, definition, example sentence in the keyword language, example sentence in English, etymology, and variant.
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
 * Defines the props for the `WordSearchPagination` component.
 *
 * @property {IWordListDataProps[]} data - An array of word data objects to be displayed in the pagination.
 */

export interface IWordSearchPaginationProps {
  data: IWordListDataProps[];
}
