interface ListItemProps {
  word: string;
  definition: string;
}

export const ListItem = ({ word, definition }: ListItemProps) => {
  return <li>
    <div>Kwéyòl: {word}</div>
    <div>English: {definition}</div>
    <div></div>
  </li>;
};
