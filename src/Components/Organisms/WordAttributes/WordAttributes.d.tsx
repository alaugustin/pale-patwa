/**
 * Defines the props for the WordAttributes component.
 *
 * @property {string | null | undefined} wordEtymology - The etymology of the word.
 * @property {string | null | undefined} wordPartOfSpeech - The part of speech of the word.
 * @property {string | null | undefined} borderClasses - Additional CSS classes to apply to the border of the component.
 * @property {string | null | undefined} wordDialect - The dialect of the word.
 * @property {string | undefined} containerClasses - Additional CSS classes to apply to the container of the component.
 */

export interface IWordAttributesProps {
  wordEtymology: string | null | undefined;
  wordPartOfSpeech: string | null | undefined;
  borderClasses?: string | null | undefined;
  wordDialect: string | null | undefined;
  containerClasses?: string | undefined;
}
