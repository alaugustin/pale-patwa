/**
 * Defines the properties for a button component.
 * @property {string | JSX.Element} buttonLabel - The label or content to be displayed on the button.
 * @property {string} [buttonClass] - An optional CSS class to be applied to the button.
 * @property {boolean} [buttonDisabled] - An optional flag to disable the button.
 * @property {string} [ariaLabel] - An optional ARIA label for the button.
 * @property {() => void} [onClickFunc] - An optional click handler function for the button.
 */
export interface IButtonProps {
  buttonLabel: string | JSX.Element;
  buttonClass?: string;
  buttonDisabled?: boolean;
  ariaLabel?: string;
  onClickFunc?: () => void;
}
