import "./styles.css";
import { dataLib } from "./Data/data";
import { ListItem } from "./ListItem/ListItem";
import { useState, useEffect } from "react";

const sortedData = [...dataLib].sort(
  (a, b) => a.word.localeCompare(b.word)
);

export default function App() {
  const [randomItem, setRandomItem] = useState(sortedData[0]);

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * sortedData.length);
    setRandomItem(sortedData[randomIndex]);
  };

  useEffect(() => {
    const interval = setInterval(getRandomItem, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ul>
      <ListItem word={randomItem.word} definition={randomItem.definition} etymology={randomItem.etymology} />
    </ul>
  );
}
