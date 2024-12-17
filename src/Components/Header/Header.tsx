import React, { useEffect, useState } from 'react';
import { AppContentData } from '../../Data/AppContent';
import { Typography } from '../Typography/Typography';

const { headingH1 } = AppContentData.globalPageContent;

const kweyolDays = {
  'Sunday': 'Dimanch',
  'Monday': 'Lendi',
  'Tuesday': 'Madi',
  'Wednesday': 'Mèkredi',
  'Thursday': 'Jedi',
  'Friday': 'Vandredi',
  'Saturday': 'Samdi'
};

const kweyolMonths = {
  'January': 'Janvye',
  'February': 'Fevriye',
  'March': 'Mas',
  'April': 'Avril',
  'May': 'Me',
  'June': 'Jen',
  'July': 'Jiyè',
  'August': 'Out',
  'September': 'Septanm',
  'October': 'Oktòb',
  'November': 'Novanm',
  'December': 'Desanm'
};

export default function Header() {
  const [currentDay, setCurrentDay] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    setCurrentDay(kweyolDays[dayName as keyof typeof kweyolDays]);
    setCurrentMonth(kweyolMonths[month as keyof typeof kweyolMonths]);
    setCurrentDate(`${dayOfMonth}, ${year}`);
  }, []);

  return (
    <header className="bg-red-400 pt-6 p-2 basis-14 flex items-center">
      <Typography
        variant="h1"
        text={headingH1}
        className={'text-5xl mr-2'}
      />
      <span className='ml-2'>{currentDay}, {currentMonth} {currentDate}</span>
    </header>
  );
}
