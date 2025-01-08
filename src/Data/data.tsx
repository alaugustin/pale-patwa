import { dataLibA } from './Leters/A';
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
import { dataLibO } from './Leters/O';
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
  ...dataLibA,
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
  ...dataLibO,
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

// add he, she, they, them, their, theirs, themself

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
 * Calculates the frequency of words in the `SortedDictionary` array, excluding a list of words.
 *
 * @param field - The field in the `SortedDictionary` array to analyze for word frequency.
 * @returns An array of the top 10 most frequent words and their counts.
 */
const excludedWords = ['li.', 'sann,', 'mwen.', 'nèf.'];
const dictionaryWords = SortedDictionary.map(entry => entry.word.toLowerCase());
const allExcludedWords = [...excludedWords, ...dictionaryWords];

const calculateWordFrequency = (field: keyof typeof SortedDictionary[0]) =>{
  const wordFrequency: { [key: string]: number } = {};

  SortedDictionary.forEach(entry => {
    if (typeof entry[field] === 'string' && entry[field]) {
      const words = (entry[field] as string).toLowerCase().split(' ');
      words.forEach(word => {
        if (!allExcludedWords.includes(word)) {
          wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        }
      });
    }
  });

  return Object.entries(wordFrequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([word, count]) => ({ word, count }));
};

const topEgSentenceKw = calculateWordFrequency('egSentenceKw');
const topWordsSyn = calculateWordFrequency('synonym');

// console.log('SortedNumbers: ', SortedNumbers);
// console.log('SortedDictionary: ', SortedDictionary);
console.log('topWords: ', topEgSentenceKw);
console.log('topWordsSyn: ', topWordsSyn);
