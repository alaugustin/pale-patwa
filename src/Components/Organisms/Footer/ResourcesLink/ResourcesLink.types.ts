/**
 * Defines the props for the ResourcesLink component.
 * @param linkData - An array of resource link data objects to render.
 * @param linkClasses - The CSS classes to apply to each link.
 */

export interface IResourceLinkProps {
  linkData: IResourceLinkDataProps[],
  linkClasses: string | undefined
}

/**
 * Defines the props for a resource link.
 * @param label - The label for the link.
 * @param href - The URL for the link.
 * @param target - The target for the link (e.g. "_blank" to open in a new tab).
 * @param download - A string filename to trigger a file download, or false to disable it.
 * @param rel - The rel attribute for the link.
 * @param type - The type attribute for the link.
 * @param icon - The icon to display for the link.
 */

export interface IResourceLinkDataProps {
  label: string;
  href: string;
  target: string;
  download?: string | boolean;
  rel: string;
  type: string;
  icon: string;
}
