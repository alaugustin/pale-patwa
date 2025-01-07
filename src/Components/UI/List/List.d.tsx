export interface IListProps {
  data: IListDataProps[];
  linkClass: string;
  hasLink?: boolean;
}

export interface IListDataProps {
  word: string;
  definition: string | number;
  egSentenceKw: string;
  egSentenceEn: string;
  synonym: string;
  antonym: string;
  crossReference: string;
  variant: string;
}
