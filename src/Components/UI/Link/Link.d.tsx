/**
 * Defines the props for a link component.
 *
 * @param linkHref - The URL of the link.
 * @param linkTarget - The target attribute for the link, e.g. "_blank" to open in a new window.
 * @param linkClasses - Additional CSS classes to apply to the link.
 * @param linkDownload - The value of the download attribute for the link.
 * @param linkType - The MIME type of the resource being linked to.
 * @param linkRel - The relationship between the current document and the linked resource.
 * @param children - The content to be displayed as the link text.
 */

export interface ILinkProps {
  linkHref: string;
  linkTarget?: string;
  linkClasses?: string;
  linkDownload?: string,
  linkType?: string,
  linkRel?: string,
  children?: string | React.ReactNode;
}
