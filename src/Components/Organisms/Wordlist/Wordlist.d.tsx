export interface IWordListDataProps {
  word: string;
  definition: string | number;
  egSentenceKw: string;
  egSentenceEn: string;
  etymology: string;
  synonym: string;
  antonym: string;
  crossReference: string;
  variant: string;
}

export interface IWordlistProps {
  data: IWordListDataProps[];
}
