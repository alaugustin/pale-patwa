/**
 * Defines the properties of a word list data item, including the word, definition, example sentences, etymology, synonyms, antonyms, cross-references, and variants.
 */

export interface IWordListDataProps {
  word: string;
  definition: string | number;
  egSentenceKw: string;
  egSentenceEn: string;
  etymology: string;
  synonym: string;
  antonym: string;
  variant: string;
}

/**
 * Defines the properties of a word list component, including the data for each word list item.
 */

export interface IWordlistProps {
  data: IWordListDataProps[];
}
