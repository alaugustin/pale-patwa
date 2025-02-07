/**
 * Defines the props for a block-level UI element component.
 *
 * @param variant - The HTML element type to use for the block-level element, such as 'footer', 'section', 'article', etc.
 * @param className - An optional CSS class name to apply to the block-level element.
 * @param children - The React nodes to render as the content of the block-level element.
 * @param id - An optional unique identifier for the block-level element.
 * @param role - An optional ARIA role to apply to the block-level element.
 */
export interface IBlockElementProps {
  variant?: 'footer' | 'section' | 'article' | 'ol' | 'div' | 'main' | 'header' | 'ul' | 'aside' | 'nav' | 'dialog' | undefined;
  className?: string;
  children?: React.ReactNode;
  id?: string;
  role?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
