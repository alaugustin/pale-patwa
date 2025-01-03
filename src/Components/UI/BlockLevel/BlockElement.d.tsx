export interface IBlockElementProps {
  variant?: 'footer' | 'section' | 'article' | 'ol' | 'div' | 'main' | 'header' | 'ul' | 'aside' | 'nav' | undefined;
  className?: string;
  children?: React.ReactNode;
  id?: string;
}
