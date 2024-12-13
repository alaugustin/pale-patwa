import { IListItemProps } from "./ListItem.d";
export const ListItem = ({ word, definition, etymology, partOfSpeech, dialect }: IListItemProps) => {
  return (
    <li>
      <div>Kwéyòl: {word} <span>{partOfSpeech && partOfSpeech}</span></div>
      <div>English: {definition}</div>
      {(dialect && dialect.length > 0) ? <div>Dialect: {dialect}</div> : ''}
      {etymology ? <div>Etymology: {etymology}</div> : <div>Etymology: n/a</div>}
    </li>
  )
};
