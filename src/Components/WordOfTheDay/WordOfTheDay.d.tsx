export interface IWordOfTheDayProps {
  kweyoleWord: string;
  dialect: string;
  etymology?: string | null;
  partOfSpeech?: string | null;
  definition: string | number;
}
