import "./styles.css";
import { dataLib } from "./Data/data";
import { Typography } from "./Components/Typography/Typography";
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
      <Typography variant="h1" text={pageH1} className={"text-5xl"} />

      <Typography variant="h2" text={randomItem.word} className={"text-8xl"} />

      <p className="text-xl">
        <Typography variant="span" text={randomItem.dialect} className={(randomItem.etymology || randomItem.partOfSpeach) ? wordAttrClasses : ''} />

        {randomItem.partOfSpeach && (
          <Typography variant="span" text={randomItem.partOfSpeach ?? ''} className={(randomItem.etymology || randomItem.partOfSpeach) ? wordAttrClasses : ''} />
        )}

        {randomItem.etymology ? <Typography variant="span" text={randomItem.etymology ?? ''} /> : ''}
      </p>

      <Typography variant="p" text={randomItem.definition} className="text-3xl" />
    </main>
  );
}
