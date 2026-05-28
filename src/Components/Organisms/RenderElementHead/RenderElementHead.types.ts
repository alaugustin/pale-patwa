/**
 * Defines the props for the `RenderElementHead` component.
 *
 * @param elementTitle - The title of the element to be rendered.
 * @param copyWrapperClassName - An optional class name for the copy wrapper element.
 * @param copyData - An optional array of data to be copied.
 * @param headingIcon - An optional React node to be used as the heading icon.
 */

export interface IRenderElementHeadProps {
  elementTitle: string;
  copyWrapperClassName?: string;
  copyData?: string[];
  headingIcon?: React.ReactNode;
}
