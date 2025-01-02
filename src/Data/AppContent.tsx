import React from 'react';
import { BorderClassHelper } from '../Helper/BorderClass';
import { HeightAndWidth } from '../Helper/HeightAndWidth';

const globalPageContent = {
  mainHeading: 'Palé Kwéyòl',
  date: new Date(),
  backToTopLabel: 'To Top',
};

const wordOfTheDayContent = {
  wodTitleH2: 'Word of the Day',
};

const libraryContent = {
  libraryTitleH2: 'Library',
  wordlistFilterPlaceholder: 'Search words…',
  modalClose: 'Close',
  prevButtonLabel: 'Previous',
  nextButtonLabel: 'Next',
};

const uiHelperClasses = {
  flexItemsCenter: 'flex items-center justify-center',
  blockElementPadding: 'pt-6 p-2 pb-7',
};

const {
  flexItemsCenter,
  blockElementPadding,
} = uiHelperClasses;

const uiClasses = {
  primaryButton: 'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded',
  listItemClass: `hover:border-gray-400 ${BorderClassHelper('border-2', 'gray', 200, true)} `,
  listButtonClass: 'p-4 bg-gray-100 hover:bg-gray-200',
  wordAttributeBorder: `pr-2 mr-2 ${BorderClassHelper('border-r', 'black')}`,
  backToTopButton: `${flexItemsCenter} fixed bottom-8 right-8 rounded-full shadow-lg text-white flex-row gap-x-2 p-4 bg-gray-400 hover:bg-gray-500`,
  paginationNumberContainer: `${flexItemsCenter} ${HeightAndWidth(6, 6)} ${BorderClassHelper('border-2', 'gray', 200, true)}`,
  paginationButton: 'hover:bg-gray-200 p-2',
  paginationButtonDisabled: 'cursor-not-allowed disabled:opacity-50',
  footerContainerClasses: `flex pt-6 p-2 basis-14 ${BorderClassHelper('border-t', 'gray', 200)}`,
  footerInfoClasses: `${flexItemsCenter} flex-row`,
  wordOfTheDayContainerClasses: `${flexItemsCenter} ${blockElementPadding} flex-col flex-3 bg-zinc-100 w-full`,
  wordOfTheDayH3Classes: 'text-3xl sm:text-6xl lg:text-8xl font-serif mb-2 font-bold',
  wordOfTheDayDefinitionClasses: 'text-3xl sm:text-4xl lg:text-6xl font-thin',
  wordListContainerClasses: `${flexItemsCenter} flex-col flex-1 w-full ${BorderClassHelper('border-t', 'gray', 100)}`,
  wordListListClasses: `${flexItemsCenter} ${blockElementPadding} text-xl max-w-4xl flex-wrap gap-4`,
  modalContainerClasses: `${flexItemsCenter} fixed inset-0 bg-black bg-opacity-50 z-50`,
  modalContentClasses: 'bg-white p-6 rounded-lg shadow-xl mx-4 w-full sm:max-w-md sm:min-w-96',
  modalH2Classes: 'text-2xl font-bold mb-2 font-serif',
  headerH1Classes: 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl mr-2',
  headerDateClasses: 'ml-2 text-xs md:text-sm lg:text-lg',
  headerContainerClasses: `${flexItemsCenter} py-3 p-2 basis-14 justify-between ${BorderClassHelper('border-b', 'gray', 200)}`,
  dictionarySearchClasses: `${flexItemsCenter} flex-row mb-8 ${BorderClassHelper('border', 'gray', 200, true)}`,
  dictionarySearchInputClasses: `p-2 w-64 ${BorderClassHelper('border-r', 'gray', 200)}`,
  appAllHolderClasses: 'flex flex-col h-screen max-w-6xl mx-auto text-slate-900',
  backToTopIconClasses: HeightAndWidth(5, 5),
  clearInputIconClasses: `${HeightAndWidth(4, 4)} m-2 fill-gray-400`,
  copyRightIconClasses: HeightAndWidth(3, 3),
};

const {
  backToTopIconClasses,
  clearInputIconClasses,
  copyRightIconClasses
} = uiClasses;

const icons = {
  backToTopIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={backToTopIconClasses} viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" /></svg>,

  clearInputIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={clearInputIconClasses} viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>,

  copyRight: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={copyRightIconClasses} viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" /></svg>
};

export const AppContentData = { globalPageContent, wordOfTheDayContent, libraryContent, uiClasses, icons, uiHelperClasses };
