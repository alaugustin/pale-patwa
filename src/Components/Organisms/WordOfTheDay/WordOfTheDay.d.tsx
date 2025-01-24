/**
 * Defines the properties for the WordOfTheDay component.
 *
 * @property {string} kweyoleWord - The Kweyol word of the day.
 * @property {string} [dialect] - The optional dialect of the Kweyol word.
 * @property {string | null} [etymology] - The etymology of the Kweyol word, if available.
 * @property {string | null} [partOfSpeech] - The part of speech of the Kweyol word, if available.
 * @property {string | number} definition - The definition of the Kweyol word.
 */

export interface IWordOfTheDayProps {
  kweyoleWord: string;
  dialect?: string;
  etymology?: string | null;
  partOfSpeech?: string | null;
  definition: string | number;
}
