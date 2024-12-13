import "./styles.css";
import { dataLib } from "./Data/data";
import { List } from "./Components/List/List";
import { useState, useEffect } from "react";

const sortedData = [...dataLib].sort(
  (a, b) => a.word.localeCompare(b.word)
);

export default function App() {
  const pageH1 = "Palé Kwéyòl";
  const wordAttrClasses = "pr-2 mr-2 border border-black border-t-0 border-b-0 border-l-0"
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
    <main className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-5xl">{pageH1}</h1>
      <h2 className="text-8xl">{randomItem.word}</h2>
      <p className="text-xl">
        <span className={(randomItem.etymology || randomItem.partOfSpeach) ? wordAttrClasses : ''}>{randomItem.dialect}</span>

        {randomItem.partOfSpeach && (
          <span className={(randomItem.etymology || randomItem.partOfSpeach) ? wordAttrClasses : ''}>{randomItem.partOfSpeach ?? ''}</span>
        )}

        {randomItem.etymology ?
          <span className=''>{randomItem.etymology ?? ''}</span> : ''
        }
      </p>
      <p className="text-3xl">{randomItem.definition}</p>
    </main>
  );
}
