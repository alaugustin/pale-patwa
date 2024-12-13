import { ListItem } from "./ListItem/ListItem";
import { IListProps } from "./List.d";

export const List = (props: IListProps) => {
  return (
    <ul>
      <ListItem
        word={props.word}
        definition={props.definition}
        etymology={props.etymology}
        dialect={props.dialect}
        partOfSpeech={props.partOfSpeech}
      />
    </ul>
  )
};
