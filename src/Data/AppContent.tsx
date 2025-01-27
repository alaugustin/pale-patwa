import React from 'react';

const globalPageContent = {
  mainHeading: 'Palé Kwéyòl',
  date: new Date(),
  backToTopLabel: 'To Top',
  searchFields: [
    'word',
    'definition',
    'egSentenceKw',
    'egSentenceEn',
    'etymology',
    'synonym',
    'antonym',
    'variant',
  ],
  excludedWordsArr: [
    'li.', 'mwen.', 'nèf.', 'lenpo', 'nwè.', 'nou.', 'sala?', 'dòla.', 'gason-an', 'nonm-lan'
  ],
};

const uiHelperClasses = {
  backToTopTextColor: 'slate-900',
  blockElementPadding: 'pt-6 p-2 pb-7',
  buttonHelperClasses: 'bg-sky-500 border-slate-400 hover:bg-sky-400',
  flexItemsCenter: 'flex items-center justify-center',
  footerColClasses: 'flex basis-full md:basis-1/4 flex-row text-xs',
  headerIconClasses: 'w-6 h-6 mr-2 mt-1',
  linkClasses: 'text-blue-900 text-xs hover:underline text-sky-500 hover:text-blue-500 visited:text-purple-700 cursor-pointer',
};

const {
  flexItemsCenter,
  blockElementPadding,
  footerColClasses,
  buttonHelperClasses,
  headerIconClasses,
  linkClasses,
  backToTopTextColor
} = uiHelperClasses;

const uiClasses = {
  appAllHolderClasses: 'flex flex-col h-screen max-w-6xl mx-auto text-slate-900',
  backToTopButton: `${flexItemsCenter} fixed bottom-8 right-8 rounded-full shadow-lg flex-row gap-x-2 p-4 bg-gray-100 border-gray-200 hover:bg-gray-200 border-2 text-${backToTopTextColor}`,
  backToTopIconClasses: `h-5 w-5 fill-${backToTopTextColor}`,
  bookIconClasses: `${headerIconClasses} mt-2`,
  calendarIconClasses: headerIconClasses,
  centeredBlurbCopyClasses: 'mb-6 max-w-screen-sm text-center',
  clearInputIconClasses: 'h-4 w-4 m-2 fill-gray-400',
  copyRightContainerClasses: `${footerColClasses} p-2 md:pb-7 order-last md:order-first`,
  copyRightIconClasses: 'mt-1 h-2 w-2',
  definitionTextClasses: 'mb-2 border-b border-gray-1 pb-2',
  dictionarySearchClasses: `${flexItemsCenter} flex-row mb-8 border border-gray-200 rounded-full`,
  dictionarySearchInputClasses: 'p-2 px-4 w-64 rounded-full border-r-0',
  footerContainerClasses: 'pb-7 basis-14 border-t border-gray-200 flex flex-col md:flex-row justify-between md:flex-wrap',
  footerFlagSectionClasses: `${footerColClasses} p-2 md:pb-7 md:mb-0 md:justify-end`,
  footerResourcesContinerClasses: 'p-2 md:pb-7 flex basis-full flex-col md:mb-0 md:px-4 md:basis-1/2',
  footerResourcesLinkClasses: linkClasses,
  footerResourcesTitleClasses: 'font-bold text-slate-800 text-sm mb-1',
  headerContainerClasses: `${flexItemsCenter} py-3 p-2 basis-14 justify-between border-b border-gray-200`,
  headerDateClasses: 'ml-2 text-xs md:text-sm lg:text-lg',
  headerH1Classes: 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl mr-2',
  listButtonClass: 'bg-gray-100 border-gray-200 hover:bg-gray-200 border-2 p-3 px-6 rounded-full',
  modalContainerClasses: `${flexItemsCenter} fixed inset-0 bg-black bg-opacity-50 z-50`,
  modalContentClasses: 'bg-white p-6 rounded-lg shadow-xl mx-4 w-full sm:max-w-md sm:min-w-96',
  modalH2Classes: 'text-2xl font-bold mb-2 font-serif',
  paginationBoardClasses: `${flexItemsCenter} flex-row`,
  paginationButton: 'hover:bg-gray-200 p-2',
  paginationButtonDisabled: 'cursor-not-allowed disabled:opacity-50',
  paginationContainerClasses: 'mt-6 flex flex-row p-2 px-4 rounded-full border border-gray-200',
  paginationNumberContainer: `${flexItemsCenter} h-6 w-6 border-2 border-gray-200 rounded`,
  pdfIconClasses: 'h-3 w-3 fill-red-500',
  primaryButton: `${buttonHelperClasses} border-2 text-white py-2 px-5 rounded-full`,
  pronounciationContainerClasses: `${blockElementPadding} ${flexItemsCenter} mb-4 bg-blue-600 flex-col w-full order-first basis-full flex-auto text-slate-50`,
  pronounciationListClasses: 'grid grid-cols-4 md:grid-cols-8 gap-4 w-full',
  pronounciationListItemClasses: `${flexItemsCenter} flex-col text-xs`,
  twoColColumnClasses: 'even:basis-5/12 odd:basis-7/12 md:odd:pr-2 md:even:pl-2',
  twoColContainerClasses: 'max-w-screen-sm md:flex md:flex-row flex-col',
  wordAttributeBorder: 'pr-2 mr-2 border-r border-black',
  wordListContainerClasses: `${flexItemsCenter} ${blockElementPadding} flex-col flex-1 w-full border-t border-gray-1`,
  wordListListClasses: `${flexItemsCenter} ${blockElementPadding} text-xl max-w-screen-sm flex-wrap gap-4`,
  wordOfTheDayContainerClasses: `${flexItemsCenter} ${blockElementPadding} flex-col flex-3 bg-yellow-400 w-full`,
  wordOfTheDayDefinitionClasses: 'text-xl font-thin md:text-right',
  wordOfTheDayH3Classes: 'underline text-2xl font-serif mb-4 font-bold  md:text-right',
  wordRelationsContainerClasses: 'mb-4 flex flex-row text-sm flex-wrap',
  wordRelationsItemClasses: 'font-bold mr-1 last:mr-0',
};

const {
  pdfIconClasses
} = uiClasses;

const icons = {
  backToTopIcon: (
    iconClasses: string,
  ) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" /></svg>
  ),

  clearInputIcon: (
    iconClasses: string,
  ) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" /></svg>
  ),

  copyright: (
    iconClasses: string,
  ) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" /></svg>
  ),

  pdfIcon: <svg xmlns="http://www.w3.org/2000/svg" className={pdfIconClasses} viewBox="0 0 16 16"><path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" /><path d="M4.603 12.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.6 11.6 0 0 0-1.997.406 11.3 11.3 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.244.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 5.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" /></svg>,

  bookIcon: (
    iconClasses: string,
  ) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" /></svg>
  ),

  calendarIcon: (
    iconClasses: string,
    iconXOffset: number,
    iconYOffset: number,
    iconTextFontSize: number,
    iconFillColor: string,
    iconDayOfMonth: string,
  ) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`${iconClasses} `} viewBox="0 0 16 16">
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
      <text
        x={iconXOffset}
        y={iconYOffset}
        fontSize={iconTextFontSize}
        fill={`#${iconFillColor}`}
      >{iconDayOfMonth}</text>
    </svg>
  ),
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
    links: [
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
        label: 'Saint Lucian Creole - Wikipedia',
        href: 'https://en.wikipedia.org/wiki/Saint_Lucian_Creole',
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

const helperFunc = {
  normalizeText: (text: string): string => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
};

export const AppContentData = {
  globalPageContent,
  wordOfTheDayContent,
  libraryContent,
  pronounciationContent,
  footerContent,
  icons,
  uiClasses,
  uiHelperClasses,
  helperFunc
};
