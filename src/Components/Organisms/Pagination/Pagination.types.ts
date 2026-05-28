/**
 * Defines the props for the Pagination component.
 *
 * @property {string} prevButtonLabel - The label for the previous page button.
 * @property {number} prev5ButtonLabel - The number of pages to jump back by 5.
 * @property {number} prev10ButtonLabel - The number of pages to jump back by 10.
 * @property {string} nextButtonLabel - The label for the next page button.
 * @property {number} next5ButtonLabel - The number of pages to jump forward by 5.
 * @property {number} next10ButtonLabel - The number of pages to jump forward by 10.
 * @property {boolean} prevButtonDisabled - Indicates whether the previous button should be disabled.
 * @property {boolean} nextButtonDisabled - Indicates whether the next button should be disabled.
 * @property {number} currentPage - The current page number.
 * @property {number} totalPages - The total number of pages.
 * @property {() => void} prevOnClickFunc - The function to be called when the previous button is clicked.
 * @property {() => void} nextOnClickFunc - The function to be called when the next button is clicked.
 * @property {(page: number) => void} setCurrentPage - A function to set the current page.
 */
export interface IPaginationProps {
  prevButtonLabel: string;
  prev5ButtonLabel: number;
  prev10ButtonLabel: number;
  nextButtonLabel: string;
  next5ButtonLabel: number;
  next10ButtonLabel: number;
  prevButtonDisabled: boolean;
  nextButtonDisabled: boolean;
  currentPage: number;
  totalPages: number;
  prevOnClickFunc: () => void;
  nextOnClickFunc: () => void;
  setCurrentPage: (page: number) => void;
}

/**
 * Defines the props for determining whether to show a button in the Pagination component.
 *
 * @property {number} currentPage - The current page number.
 * @property {number} currentPageComparator - The page number to compare the current page against.
 * @property {number} totalPages - The total number of pages.
 */

export interface IShouldShowButtonProps {
  currentPage: number,
  currentPageComparator: number,
  totalPages: number,
}
