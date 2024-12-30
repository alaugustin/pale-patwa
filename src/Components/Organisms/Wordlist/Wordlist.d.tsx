export interface IWordListDataProps {
  word: string;
  definition: string | number;
  egSentenceKw: string;
  egSentenceEn: string;
  etymology: string;
}

export interface IWordlistProps {
  data: IWordListDataProps[];
}
