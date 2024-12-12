import "./styles.css";
import { dataLib } from "../src/data";
import { ListItem } from "./ListItem/ListItem";

const sortedData = [...dataLib].sort(
  (a, b) => a.word.localeCompare(b.word)
);

console.log(sortedData);

export default function App() {
  return (
    <ul>
      {sortedData.map((item) => (
        <ListItem word={item.word} definition={item.definition} />
      ))}
    </ul>
  );
}
