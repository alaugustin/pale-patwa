export interface IModalProps {
  modalTitle: string | null;
  modalDefinition: string | number;
  modalSentenceKw: string | null;
  modalSentenceEn: string | null;
  modalSynonym: string | null;
  modalAntonym: string | null;
  modalCrossRef: string | null;
  clickHandler: () => void;
}
