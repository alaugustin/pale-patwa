export interface IListItemProps {
  word: string | null;
  definition: string | number;
  egSentenceKw: string | null;
  egSentenceEn: string | null;
  hasLink?: boolean;
  listItemClass?: string;
  buttonClass?: string;
  synonym: string | null;
  antonym: string | null;
  variant: string | null;
}

