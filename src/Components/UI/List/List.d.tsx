/**
 * Defines the props for the `List` component.
 *
 * @property {IListDataProps[]} data - An array of data objects to be displayed in the list.
 * @property {string} linkClass - A CSS class to be applied to the links in the list.
 * @property {boolean} [hasLink] - Indicates whether the list items should have links.
 */

export interface IListProps {
  data: IListDataProps[];
  linkClass?: string;
  hasLink?: boolean;
}

/**
 * Defines the shape of the data objects to be displayed in the `List` component.
 *
 * @property {string} word - The word to be displayed.
 * @property {string | number} definition - The definition of the word.
 * @property {string} egSentenceKw - The example sentence using the keyword.
 * @property {string} egSentenceEn - The English translation of the example sentence.
 * @property {string} synonym - A synonym for the word.
 * @property {string} antonym - An antonym for the word.
 * @property {string} crossReference - A cross-reference for the word.
 * @property {string} variant - A variant of the word.
 */

export interface IListDataProps {
  word: string;
  definition: string | number;
  egSentenceKw: string;
  egSentenceEn: string;
  synonym: string;
  antonym: string;
  crossReference: string;
  variant: string;
}
