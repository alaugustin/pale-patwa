import { stLucia } from './Misc/StLucia';
import { dataLibA } from './Letters/A';
import { dataLibB } from './Letters/B';
import { dataLibC } from './Letters/C';
import { dataLibD } from './Letters/D';
import { dataLibE } from './Letters/E';
import { dataLibF } from './Letters/F';
import { dataLibG } from './Letters/G';
import { dataLibH } from './Letters/H';
import { dataLibI } from './Letters/I';
import { dataLibJ } from './Letters/J';
import { dataLibK } from './Letters/K';
import { dataLibL } from './Letters/L';
import { dataLibM } from './Letters/M';
import { dataLibO } from './Letters/O';
import { dataLibN } from './Letters/N';
import { dataLibP } from './Letters/P';
import { dataLibR } from './Letters/R';
import { dataLibS } from './Letters/S';
import { dataLibT } from './Letters/T';
import { dataLibV } from './Letters/V';
import { dataLibW } from './Letters/W';
import { dataLibY } from './Letters/Y';
import { dataLibZ } from './Letters/Z';
import { dataLibNum } from './Numbers/Numbers';
import { dataDays } from './Calendar/Days';
import { dataMonths } from './Calendar/Months';

export const dataLib = [
  ...stLucia,
  ...dataLibA,
  ...dataLibB,
  ...dataLibC,
  ...dataLibD,
  ...dataLibE,
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
 * @returns An array of the top 5 most frequent words and their counts.
 */
const excludedWords = [
  'li.', 'mwen.', 'nèf.', 'lenpo', 'nwè.', 'nou.', 'sala?', 'dòla.', 'gason-an'
];
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
    }});

  return Object.entries(wordFrequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([word, count]) => ({ word, count }));
};

const topEgSentenceKw = calculateWordFrequency('egSentenceKw');
const topWordsSyn = calculateWordFrequency('synonym');
const topWordsAnt = calculateWordFrequency('antonym');

console.log('topWords: ', topEgSentenceKw);
console.log('topWordsSyn: ', topWordsSyn);
console.log('topWordsAnt: ', topWordsAnt);

// console.log('SortedNumbers: ', SortedNumbers);
// console.log('SortedDictionary: ', SortedDictionary);
