import React from 'react';

const uiHelperClasses = {
  flexItemsCenter: 'flex items-center justify-center',
  blockElementPadding: 'pt-6 p-2 pb-7',
  footerColClasses: 'flex basis-full md:basis-1/4 flex-row text-xs',
  buttonHelperClasses: 'bg-sky-500 border-slate-400 hover:bg-sky-400',
};

const {
  flexItemsCenter,
  blockElementPadding,
  footerColClasses,
  buttonHelperClasses
} = uiHelperClasses;

const uiClasses = {
  appAllHolderClasses: 'flex flex-col h-screen max-w-6xl mx-auto text-slate-900',
  backToTopButton: `${flexItemsCenter} fixed bottom-8 right-8 rounded-full shadow-lg text-white flex-row gap-x-2 p-4 bg-gray-400 hover:bg-gray-500`,
  backToTopIconClasses: 'h-5 w-5',
  centeredBlurbCopyClasses: 'mb-6 max-w-screen-sm text-center',
  clearInputIconClasses: 'h-4 w-4 m-2 fill-gray-400',
  copyRightContainerClasses: `${footerColClasses} p-2 md:pb-7 order-last md:order-first`,
  copyRightIconClasses: 'mt-1 h-2 w-2',
  dictionarySearchClasses: `${flexItemsCenter} flex-row mb-8 border border-gray-200 rounded`,
  dictionarySearchInputClasses: 'p-2 w-64 border-r border-gray-200',
  footerContainerClasses: 'pb-7 basis-14 border-t border-gray-200 flex flex-col md:flex-row justify-between md:flex-wrap',
  footerFlagSectionClasses: `${footerColClasses} p-2 md:pb-7 md:mb-0 md:justify-end`,
  footerResourcesContinerClasses: 'p-2 md:pb-7 flex basis-full flex-col md:mb-0 md:px-4 md:basis-1/2',
  footerResourcesLinkClasses: 'text-slate-700 text-xs hover:underline text-sky-500 hover:text-blue-500 visited:text-violet-500',
  footerResourcesTitleClasses: 'font-bold text-slate-800 text-sm mb-1',
  headerContainerClasses: `${flexItemsCenter} py-3 p-2 basis-14 justify-between border-b border-gray-200`,
  headerDateClasses: 'ml-2 text-xs md:text-sm lg:text-lg',
  headerH1Classes: 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl mr-2',
  listButtonClass: `${buttonHelperClasses} border-2 p-3 px-6 rounded-full text-slate-800`,
  modalContainerClasses: `${flexItemsCenter} fixed inset-0 bg-black bg-opacity-50 z-50`,
  modalContentClasses: 'bg-white p-6 rounded-lg shadow-xl mx-4 w-full sm:max-w-md sm:min-w-96',
  modalH2Classes: 'text-2xl font-bold mb-2 font-serif',
  paginationBoardClasses: `${flexItemsCenter} flex-row`,
  paginationButton: 'hover:bg-gray-200 p-2',
  paginationButtonDisabled: 'cursor-not-allowed disabled:opacity-50',
  paginationContainerClasses: 'mt-6 flex flex-row p-2 px-4 rounded-full border border-gray-200',
  paginationNumberContainer: `${flexItemsCenter} h-6 w-6 border-2 border-gray-200 rounded`,
  primaryButton: `${buttonHelperClasses} border-2 text-white py-2 px-4 rounded`,
  pronounciationContainerClasses: `${blockElementPadding} ${flexItemsCenter} mb-4 bg-neutral-500 flex-col w-full text-neutral-200 order-first basis-full flex-auto`,
  pronounciationListClasses: 'grid grid-cols-4 md:grid-cols-8 gap-4 w-full',
  pronounciationListItemClasses: `${flexItemsCenter} flex-col text-xs`,
  twoColColumnClasses: 'even:basis-5/12 odd:basis-7/12 md:odd:pr-2 md:even:pl-2',
  twoColContainerClasses: 'max-w-screen-sm md:flex md:flex-row flex-col',
  wordAttributeBorder: 'pr-2 mr-2 border-r border-black',
  wordListContainerClasses: `${flexItemsCenter} ${blockElementPadding} flex-col flex-1 w-full border-t border-gray-1`,
  wordListListClasses: `${flexItemsCenter} ${blockElementPadding} text-xl max-w-screen-sm flex-wrap gap-4`,
  wordOfTheDayContainerClasses: `${flexItemsCenter} ${blockElementPadding} flex-col flex-3 bg-amber-50 w-full`,
  wordOfTheDayDefinitionClasses: 'text-xl font-thin md:text-right',
  wordOfTheDayH3Classes: 'underline text-2xl font-serif mb-4 font-bold  md:text-right',
};

const {
  backToTopIconClasses,
  clearInputIconClasses,
  copyRightIconClasses
} = uiClasses;

const icons = {
  backToTopIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={backToTopIconClasses} viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" /></svg>,

  clearInputIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={clearInputIconClasses} viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" /></svg>,

  copyRight: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={copyRightIconClasses} viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" /></svg>,

  pdfIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 fill-red-500" viewBox="0 0 16 16"><path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" /><path d="M4.603 12.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.6 11.6 0 0 0-1.997.406 11.3 11.3 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.244.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 5.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" /></svg>
};

const globalPageContent = {
  mainHeading: 'Palé Kwéyòl',
  date: new Date(),
  backToTopLabel: 'To Top',
};

const wordOfTheDayContent = {
  wodTitleH2: 'Word of the Day',
  wodContent: [
    'Discover a new Kwéyòl word daily!',
    'Expand your Creole vocabulary with detailed etymology, usage examples, and cultural context - one word at a time.'
  ]
};

const libraryContent = {
  libraryTitleH2: 'Library',
  wordlistFilterPlaceholder: 'Search words…',
  modalClose: 'Close',
  prevButtonLabel: 'Previous',
  nextButtonLabel: 'Next',
  paginationItemsPerHeight: {
    0: 8,     // default
    667: 15,
    896: 20,
    1024: 25,
    1280: 33
  },
  wordListContent: [
    'Search through our comprehensive Kwéyòl dictionary with real-time filtering.',
    'Find words, definitions, example sentences, and etymology in both Kwéyòl and English.'
  ]
};

const pronounciationContent = {
  pronounciationTitleH2: 'IPA Pronunciation',
};

const footerContent = {
  resources: {
    titleH2: 'Resources',
    link: [
      {
        label: 'Kwéyòl Dictionary - Ministry of Education, Government of Saint Lucia',
        href: 'http://www.saintluciancreole.dbfrank.net/dictionary/KweyolDictionary.pdf',
        target: '_blank',
        rel: 'noreferrer noopener',
        download: 'Kwéyòl Dictionary - Ministry of Education, Government of Saint Lucia',
        type: 'application/pdf',
      }, {
        label: 'Kwéyòl Dictionary - Webonary',
        href: 'https://www.webonary.org/kweyol/',
        target: '_blank',
        rel: 'noreferrer noopener',
        type: 'text/html',
      }, {
        label: 'Github',
        href: 'https://github.com/alaugustin/pale-patwa',
        target: '_blank',
        rel: 'noreferrer noopener',
        type: 'text/html',
      }
    ]
  },
};

export const AppContentData = { globalPageContent, wordOfTheDayContent, libraryContent, pronounciationContent, footerContent, icons, uiClasses, uiHelperClasses };
