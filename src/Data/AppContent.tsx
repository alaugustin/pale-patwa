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
  flexCol: 'flex flex-col',
  flexItemsCenter: 'flex items-center justify-center',
  primaryButton: 'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded',
  listItemClass: 'rounded border-2 border-gray-200 hover:border-gray-400',
  listButtonClass: 'p-4 bg-gray-100 hover:bg-gray-200',
  wordAttributeBorder: 'pr-2 mr-2 border border-black border-t-0 border-b-0 border-l-0',
  blockElementPadding: 'pt-6 p-2 pb-7',
  backToTopButton: 'fixed bottom-8 right-8 rounded-full shadow-lg text-white flex flex-row gap-x-2 p-4 bg-gray-400 hover:bg-gray-500',
  backToTopButtonIcon: 'h-6 w-6 fill-gray-700',
};

export const AppContentData = { globalPageContent, wordOfTheDayContent, libraryContent, uiClasses };
