/**
 * Defines the props for the `PronounciationList` component.
 *
 * @property {Array<{ letter: string; pronounciation: string; phoneme: string; link?: string; name?: string }>} dataArr - An array of data items, where each item represents a pronunciation entry.
 * @property {string} listClasses - CSS classes to be applied to the list container.
 * @property {string} listItemClasses - CSS classes to be applied to each list item.
 */

export interface IPronunciationListProps {
  dataArr: Array<{
    letter: string;
    pronounciation: string;
    phoneme: string;
    link?: string;
    name?: string;
  }>;
  listClasses: string;
  listItemClasses: string;
}

/**
 * Defines the props for a single pronunciation list data item.
 *
 * @property {string} letter - The letter associated with the pronunciation.
 * @property {string} pronounciation - The pronunciation of the letter.
 * @property {string} phoneme - The phoneme associated with the pronunciation.
 * @property {string} [link] - An optional link associated with the pronunciation.
 * @property {string} [name] - An optional name associated with the pronunciation.
 */

export interface IPronunciationListDataItemProps {
  letter: string;
  pronounciation: string;
  phoneme: string;
  link?: string;
  name?: string;
}
