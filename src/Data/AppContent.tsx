import React from 'react';

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

const uiClasses = {
  flexItemsCenter: 'flex items-center justify-center',
  primaryButton: 'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded',
  listItemClass: 'rounded border-2 border-gray-200 hover:border-gray-400',
  listButtonClass: 'p-4 bg-gray-100 hover:bg-gray-200',
  wordAttributeBorder: 'pr-2 mr-2 border border-black border-t-0 border-b-0 border-l-0',
  blockElementPadding: 'pt-6 p-2 pb-7',
  backToTopButton: 'fixed bottom-8 right-8 rounded-full shadow-lg text-white flex flex-row gap-x-2 p-4 bg-gray-400 hover:bg-gray-500 items-center justify-center',
  backToTopButtonIcon: 'h-6 w-6 fill-gray-700',
  paginationNumberContainer: 'w-6 h-6 rounded border-2 border-gray-200 flex items-center justify-center',
  paginationButton: 'hover:bg-gray-200 p-2',
  paginationButtonDisabled: 'cursor-not-allowed disabled:opacity-50',
  footerContainerClasses: 'flex border-t border-gray-200 pt-6 p-2 basis-14',
  footerInfoClasses: 'flex flex-row items-center justify-center',
  wordOfTheDayContainerClasses: 'flex-col flex-3 bg-zinc-100 w-full',
  wordOfTheDayH3Classes: 'text-3xl sm:text-6xl lg:text-8xl font-serif mb-2 font-bold',
  wordOfTheDayDefinitionClasses: 'text-3xl sm:text-4xl lg:text-6xl font-thin',
  wordListContainerClasses: 'flex-col flex-1 border-t border-gray-100 w-full',
  wordListListClasses: 'text-xl max-w-4xl flex-wrap gap-4',
  modalContainerClasses: 'fixed inset-0 bg-black bg-opacity-50 z-50',
  modalContentClasses: 'bg-white p-6 rounded-lg shadow-xl max-w-md mx-4',
  modalH2Classes: 'text-2xl font-bold mb-2 font-serif',
  headerH1Classes: 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl mr-2',
  headerDateClasses: 'ml-2 text-xs md:text-sm lg:text-lg',
  headerContainerClasses: 'border-b border-gray-200 py-3 p-2 basis-14 justify-between',
  dictionarySearchClasses: 'flex-row rounded border border-gray-200 mb-8',
  dictionarySearchInputClasses: 'p-2 w-64 border-r border-gray-200',
  appAllHolderClasses: 'flex flex-col h-screen max-w-6xl mx-auto text-slate-900',
};

const icons = {
  backToTopIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" /></svg>,

  clearInputIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-4 w-4 m-2 fill-gray-400" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>,

  copyRight: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-3 w-3" viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" /></svg>
};

export const AppContentData = { globalPageContent, wordOfTheDayContent, libraryContent, uiClasses, icons };
