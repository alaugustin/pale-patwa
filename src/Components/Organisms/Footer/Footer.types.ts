/**
 * Defines the props for the Footer component.
 * @param footerContainerClass - The CSS class name for the footer container.
 * @param currentYear - The current year to be displayed in the footer.
 * @param siteName - The name of the site to be displayed in the footer.
 * @param children - Optional React nodes to be rendered inside the footer.
 */

export interface IFooterProps {
  footerContainerClass: string;
  currentYear: number;
  siteName: string;
  children?: React.ReactNode;
}
