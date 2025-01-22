export interface IPronunciationListProps {
  dataArr: Array<{
    letter: string;
    pronounciation: string;
    phoneme: string;
    link?: string;
    name?: string;
  }>;
  listClasses: string;
  listItemClasses: string;
}
