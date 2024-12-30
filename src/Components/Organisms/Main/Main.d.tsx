import { IWordListDataProps } from '../Wordlist/Wordlist.d';

export interface IMainProps {
  mainContainerClass: string;
  wordOfTheDayData: {
    word: string;
    dialect: string;
    definition: string | number;
    partOfSpeech?: string | null;
    etymology?: string | null;
    egSentenceKw?: string | null;
    egSentenceEn?: string | null;
  };
  wordListData: IWordListDataProps[];
}
