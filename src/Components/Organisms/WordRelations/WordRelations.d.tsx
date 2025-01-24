/**
 * Defines the props for the WordRelations component.
 * @property {any} [varData] - Optional data for word variations.
 * @property {any} [synData] - Optional data for word synonyms.
 * @property {any} [antData] - Optional data for word antonyms.
 */

export interface IWordRelationsProps {
  varData?: any,
  synData?: any,
  antData?: any
}

/**
 * Defines the props for a word group component.
 * @property {string} label - The label for the word group.
 * @property {string[]} data - The data for the word group, represented as an array of strings.
 */

export interface IWordGroupProps {
  label: string;
  data: string[];
}
