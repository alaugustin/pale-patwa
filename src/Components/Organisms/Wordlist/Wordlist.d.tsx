export interface IWordListDataProps {
  word: string;
  definition: string | number;
  egSentenceKw: string;
  egSentenceEn: string;
}

export interface IWordlistProps {
  data: IWordListDataProps[];
}
