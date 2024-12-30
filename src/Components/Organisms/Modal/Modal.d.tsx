export interface IModalProps {
  modalTitle: string | null;
  modalDefinition: string | number;
  modalSentenceKw: string | null;
  modalSentenceEn: string | null;
  clickHandler: () => void;
}
