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
