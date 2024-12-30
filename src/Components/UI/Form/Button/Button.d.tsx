export interface IButtonProps {
  buttonLabel: string | JSX.Element;
  buttonClass?: string;
  buttonDisabled?: boolean;
  onClickFunc?: () => void;
}
