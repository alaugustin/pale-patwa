/**
 * Defines the props for the Pagination component.
 *
 * @property {string} prevButtonLabel - The label for the previous button.
 * @property {number} prev5ButtonLabel - The label for the previous 5 button.
 * @property {number} prev10ButtonLabel - The label for the previous 10 button.
 * @property {string} nextButtonLabel - The label for the next button.
 * @property {number} next5ButtonLabel - The label for the next 5 button.
 * @property {number} next10ButtonLabel - The label for the next 10 button.
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
