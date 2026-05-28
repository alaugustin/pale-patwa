/**
 * Defines the props for the WordRelations component.
 * @property {string | (string | null)[] | null} [varData] - Optional list of word variants.
 * @property {string | (string | null)[] | null} [synData] - Optional list of synonyms.
 * @property {string | (string | null)[] | null} [antData] - Optional list of antonyms.
 */

export interface IWordRelationsProps {
  varData?: string | (string | null)[] | null,
  synData?: string | (string | null)[] | null,
  antData?: string | (string | null)[] | null
}

/**
 * Defines the props for a word group component.
 * @property {string} label - The label for the word group (e.g. 'syn', 'ant', 'var').
 * @property {(string | null)[]} data - The list of related words, where null indicates no entry.
 */

export interface IWordGroupProps {
  label: string;
  data: (string | null)[];
}
