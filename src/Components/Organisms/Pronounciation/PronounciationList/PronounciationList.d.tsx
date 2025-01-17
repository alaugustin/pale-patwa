export interface IPronunciationListProps {
  dataArr: Array<{
    letter: string;
    pronounciation: string;
    sound: string;
  }>;
  listClasses: string;
  listItemClasses: string;
}
