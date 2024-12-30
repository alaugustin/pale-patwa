export interface IPaginationProps {
  prevButtonLabel: string;
  nextButtonLabel: string;
  prevButtonDisabled: boolean;
  nextButtonDisabled: boolean;
  paginationInfo: string;
  prevOnClickFunc: () => void;
  nextOnClickFunc: () => void;
}
