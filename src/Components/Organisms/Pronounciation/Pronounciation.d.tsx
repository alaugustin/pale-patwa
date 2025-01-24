/**
 * Defines the props for the Pronounciation component.
 *
 * @property {string} [className] - An optional CSS class name to apply to the component.
 * @property {string} [titleH2] - An optional title to display as an H2 heading.
 */
export interface IPronunciationsProps {
  className?: string;
  titleH2?: string;
}

/**
 * Defines the props for the PronunciationList component.
 *
 * @property {Array<{ letter: string; pronounciation: string; phoneme: string; link?: string; name?: string }>} dataArr - An array of data objects containing information about pronunciations.
 * @property {string} listClasses - CSS classes to apply to the list container.
 * @property {string} listItemClasses - CSS classes to apply to each list item.
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
