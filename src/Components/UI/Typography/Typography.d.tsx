/**
 * Defines the props for the Typography component.
 *
 * @param variant - The HTML element to use for the typography, such as 'h1', 'h2', 'h3', 'span', 'p', 'strong' or 'sub'.
 * @param className - An optional CSS class name to apply to the component.
 * @param children - The content to be rendered within the Typography component.
 * @param ariaLabel - An optional ARIA label to apply to the component.
 */
export interface ITypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'strong' | 'sub' | undefined;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  role?: string;
}
