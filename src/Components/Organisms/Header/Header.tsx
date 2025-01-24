import React, { useEffect, useState } from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { Typography } from '../../UI/Typography/Typography';
import { dataDays } from '../../../Data/Calendar/Days';
import { dataMonths } from '../../../Data/Calendar/Months';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IHeaderProps } from './Header.d';

const { date } = AppContentData.globalPageContent;
const {
  headerH1Classes,
  headerDateClasses
} = AppContentData.uiClasses;

const kweyolDays = Object.fromEntries(
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    .map((day, index) => [day, dataDays[index].word])
);

const kweyolMonths = Object.fromEntries(
  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    .map((month, index) => [month, dataMonths[index].word])
);

export default function Header({
  headerContainerClass,
  mainHeading
}: IHeaderProps) {
  const [currentDay, setCurrentDay] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState('');

  useEffect(() => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    setCurrentDay(kweyolDays[dayName as keyof typeof kweyolDays]);
    setCurrentMonth(kweyolMonths[month as keyof typeof kweyolMonths]);
    setCurrentYear(`${year}`);
    setCurrentDayOfMonth(`${dayOfMonth}`);
  }, []);

  const headerDate = `${currentDay} ${currentDayOfMonth === '1' ?
    'pwèmyé' :
    currentDayOfMonth} ${currentMonth}, ${currentYear}`;

  return (
    <BlockElement variant='header' className={headerContainerClass}>
      <Typography
        variant="h1"
        className={headerH1Classes}
      >{mainHeading}</Typography>

      <Typography variant='span' className={headerDateClasses}>{headerDate}</Typography>
    </BlockElement>
  );
}
