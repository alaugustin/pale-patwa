export interface IModalProps {
  modalTitle: string | null;
  modalDefinition: string | number;
  modalSentenceKw: string | null;
  modalSentenceEn: string | null;
  modalSynonym: string | null;
  modalAntonym: string | null;
  modalCrossRef: string | null;
  modalVariant: string | null;
  clickHandler: () => void;
}
