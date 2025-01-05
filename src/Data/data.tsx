import { dataLibB } from './Leters/B';
import { dataLibC } from './Leters/C';
import { dataLibD } from './Leters/D';
import { dataLibF } from './Leters/F';
import { dataLibG } from './Leters/G';
import { dataLibH } from './Leters/H';
import { dataLibI } from './Leters/I';
import { dataLibJ } from './Leters/J';
import { dataLibK } from './Leters/K';
import { dataLibL } from './Leters/L';
import { dataLibM } from './Leters/M';
import { dataLibN } from './Leters/N';
import { dataLibP } from './Leters/P';
import { dataLibR } from './Leters/R';
import { dataLibS } from './Leters/S';
import { dataLibT } from './Leters/T';
import { dataLibV } from './Leters/V';
import { dataLibW } from './Leters/W';
import { dataLibY } from './Leters/Y';
import { dataLibZ } from './Leters/Z';
import { dataLibNum } from './Numbers/Numbers';
import { dataDays } from './Calendar/Days';
import { dataMonths } from './Calendar/Months';

export const dataLib = [
  ...dataLibB,
  ...dataLibC,
  ...dataLibD,
  ...dataLibF,
  ...dataLibG,
  ...dataLibH,
  ...dataLibI,
  ...dataLibJ,
  ...dataLibK,
  ...dataLibL,
  ...dataLibM,
  ...dataLibN,
  ...dataLibP,
  ...dataLibR,
  ...dataLibS,
  ...dataLibT,
  ...dataLibV,
  ...dataLibW,
  ...dataLibY,
  ...dataLibZ,
  ...dataLibNum,
  ...dataDays,
  ...dataMonths,
];

/**
 - Sorts the `dataLibNum` array in numerical order by the `definition` property.
 */
export const SortedNumbers = dataLibNum.sort((a, b) => Number(a.definition) - Number(b.definition));


/**
 - Sorts the `dataLib` array in alphabetical order by the `word` property, and then by the `definition` property if the `word` properties are equal.
 */
export const SortedDictionary = dataLib.sort((a, b) => {
  const wordComparison = String(a.word).localeCompare(String(b.word));
  if (wordComparison === 0) {
    return String(a.definition).localeCompare(String(b.definition));
  }
  return wordComparison;
});


/**
 - Calculates the frequency of words in the `SortedDictionary` array and returns the top 10 most frequent words.
 *
 - The `wordFrequency` object is used to keep track of the frequency of each word. The code iterates through the `SortedDictionary` array, extracts the words from the `egSentenceKw` property, and updates the `wordFrequency` object accordingly.
 *
 - The `topWords` array is then created by sorting the `wordFrequency` object by the frequency values in descending order, and taking the first 10 entries. Each entry in `topWords` is an object with `word` and `count` properties.
 *
 - Finally, the `topWords` array is logged to the console.
 */
const excludedWords = [''];
const dictionaryWords = SortedDictionary.map(entry => entry.word.toLowerCase());
const allExcludedWords = [...excludedWords, ...dictionaryWords];
const wordFrequency: { [key: string]: number } = {};

SortedDictionary.forEach(entry => {
  if (typeof entry.egSentenceKw === 'string' && entry.egSentenceKw) {
    const words = entry.egSentenceKw.toLowerCase().split(' ');
    words.forEach(word => {
      if (!allExcludedWords.includes(word)) {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
      }
    });
  }
});

const topWords = Object.entries(wordFrequency)
  .sort(([, a], [, b]) => b - a)
  .slice(0, 10)
  .map(([word, count]) => ({ word, count }));

console.log(topWords);
