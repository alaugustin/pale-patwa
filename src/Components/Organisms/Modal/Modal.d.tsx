/**
 * Defines the properties for a modal component.
 *
 * @property {string | null} modalTitle - The title of the modal.
 * @property {string | number} modalDefinition - The definition or content of the modal.
 * @property {string | null} modalSentenceKw - The modal sentence in the keyword language.
 * @property {string | null} modalSentenceEn - The modal sentence in English.
 * @property {string | null} modalVariant - The variant of the modal content.
 * @property {() => void} clickHandler - The function to be called when the modal is clicked.
 */

export interface IModalProps {
  modalTitle: string | null;
  modalDefinition: string | number;
  modalSentenceKw: string | null;
  modalSentenceEn: string | null;
  modalVariant: string | null;
  clickHandler: () => void;
}
