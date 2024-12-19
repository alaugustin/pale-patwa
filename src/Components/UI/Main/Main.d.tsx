import { IListWordDataProps } from '../../Wordlist/Wordlist.d';

export interface IMainProps {
  mainContainerClass: string;
  wordOfTheDayData: {
    word: string;
    dialect: string;
    definition: string | number;
    partOfSpeech?: string | null;
    etymology?: string | null;
  };
  wordListData: IListWordDataProps[];
}
