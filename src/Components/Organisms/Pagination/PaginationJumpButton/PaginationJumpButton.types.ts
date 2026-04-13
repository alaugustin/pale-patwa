/**
 * Defines the props for the `PaginationJumpButton` component.
 *
 * @param amount - The number of pages to jump by.
 * @param currentPage - The current page number.
 * @param totalPages - The total number of pages.
 * @param onPageChange - A callback function that is called when the page is changed.
 */
export interface IPaginationJumpButtonProps {
  amount: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
