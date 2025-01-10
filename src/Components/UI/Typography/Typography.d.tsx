/**
 * Defines the props for the Typography component.
 *
 * @param variant - The HTML element to use for the typography, such as 'h1', 'h2', 'h3', 'span', 'p', or 'strong'.
 * @param className - An optional CSS class name to apply to the component.
 * @param children - The content to be rendered within the Typography component.
 */

export interface ITypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'strong' | undefined;
  className?: string;
  children?: React.ReactNode;
}
