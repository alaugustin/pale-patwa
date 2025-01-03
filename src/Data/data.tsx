import { dataLibB } from './Leters/B';
import { dataLibC } from './Leters/C';
import { dataLibD } from './Leters/D';
import { dataLibF } from './Leters/F';
import { dataLibG } from './Leters/G';
import { dataLibH } from './Leters/H';
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

export const SortedNumbers = dataLibNum.sort((a, b) => Number(a.definition) - Number(b.definition)); // implement sorting helper function

export const SortedDictionary = dataLib.sort((a, b) => {
  const wordComparison = String(a.word).localeCompare(String(b.word));
  if (wordComparison === 0) {
    return String(a.definition).localeCompare(String(b.definition));
  }
  return wordComparison;
});
