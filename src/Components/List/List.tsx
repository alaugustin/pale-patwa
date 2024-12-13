import { ListItem } from "./ListItem/ListItem";
import { IListProps } from "./List.d";

export const List = (props: {
  word: string;
  definition: string;
  etymology: string;
  dialect: string;
  partOfSpeech: string;
}) => {
  return (
    <ul>
      <ListItem word={props.word} definition={props.definition} etymology={props.etymology} dialect={props.dialect} partOfSpeech={props.partOfSpeech} />
    </ul>
  )
};
