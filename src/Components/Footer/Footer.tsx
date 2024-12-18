import React, { useEffect, useState } from 'react';
import { AppContentData } from '../../Data/AppContent';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const {mainHeading} = AppContentData.globalPageContent;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-green-400 pt-6 p-2 basis-14 flex items-center">
      <div id="copyRight">&copy; {year} {mainHeading}</div>
    </footer>
  );
}
