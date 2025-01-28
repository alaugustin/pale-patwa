/**
 * Defines the props for the ResourcesLink component.
 * @param linkData - The data for the link.
 * @param linkClasses - The CSS classes to apply to the link.
 */

export interface IResourceLinkProps {
  linkData: any,
  linkClasses: string | undefined
}

/**
 * Defines the props for a resource link.
 * @param label - The label or text to display for the link.
 * @param href - The URL or path the link should point to.
 * @param target - The target attribute for the link (e.g. "_blank" to open in a new tab).
 * @param download - Whether the link should trigger a file download.
 * @param rel - The rel attribute for the link (e.g. "noopener noreferrer" for security).
 * @param type - The MIME type of the resource the link points to.
 */

export interface IResourceLinkDataProps {
  label: string;
  href: string;
  target: string;
  download: boolean;
  rel: string;
  type: string;
}
