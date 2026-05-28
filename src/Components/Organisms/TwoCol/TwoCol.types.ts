/**
 * Defines the props for the TwoCol component.
 *
 * @property {React.ReactNode | null} twoColData - The content to be displayed in the two-column layout.
 * @property {string} [footerContainerClass] - An optional CSS class name for the footer container.
 * @property {number} [currentYear] - The current year to be displayed in the footer.
 * @property {string} [siteName] - The name of the site to be displayed in the footer.
 * @property {React.ReactNode} [children] - Any additional content to be rendered within the TwoCol component.
 */

export interface ITwoColProps {
  twoColData: React.ReactNode | null;
  footerContainerClass?: string;
  currentYear?: number;
  siteName?: string;
  children?: React.ReactNode;
}
