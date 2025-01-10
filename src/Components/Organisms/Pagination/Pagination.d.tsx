/**
 * Defines the props for the Pagination component.
 *
 * @property {string} prevButtonLabel - The label for the previous button.
 * @property {string} nextButtonLabel - The label for the next button.
 * @property {boolean} prevButtonDisabled - Indicates whether the previous button should be disabled.
 * @property {boolean} nextButtonDisabled - Indicates whether the next button should be disabled.
 * @property {number} currentPage - The current page number.
 * @property {number} totalPages - The total number of pages.
 * @property {() => void} prevOnClickFunc - The function to be called when the previous button is clicked.
 * @property {() => void} nextOnClickFunc - The function to be called when the next button is clicked.
 */

export interface IPaginationProps {
  prevButtonLabel: string;
  nextButtonLabel: string;
  prevButtonDisabled: boolean;
  nextButtonDisabled: boolean;
  currentPage: number;
  totalPages: number;
  prevOnClickFunc: () => void;
  nextOnClickFunc: () => void;
}
