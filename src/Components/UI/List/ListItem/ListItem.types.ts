/**
 * Defines the props for the ListItem component.
 *
 * @property {string | null} word - The Kwéyòl word to display.
 * @property {string | number} definition - The English definition of the word.
 * @property {string | null} egSentenceKw - An example sentence in Kwéyòl.
 * @property {string | null} egSentenceEn - The English translation of the example sentence.
 * @property {boolean} [hasLink] - Whether the list item should render as a clickable link.
 * @property {string} [listItemClass] - Optional CSS class to apply to the list item element.
 * @property {string} [buttonClass] - Optional CSS class to apply to the button element.
 * @property {string | null} variant - An alternate spelling or form of the word.
 * @property {number | null} [subscript] - A numeric subscript used to disambiguate entries that share the same word.
 */
export interface IListItemProps {
  word: string | null;
  definition: (string | number)[];
  egSentenceKw: string | null;
  egSentenceEn: string | null;
  hasLink?: boolean;
  listItemClass?: string;
  buttonClass?: string;
  variant: string | null;
  subscript?: number | null;
}

