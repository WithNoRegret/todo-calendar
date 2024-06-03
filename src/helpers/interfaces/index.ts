export type ModalType = "list" | "task";

export interface ModalContextValues {
    isModalOpen: boolean;
    modalType: ModalType;
    openModal: (type?: ModalType) => void;
    closeModal: () => void;
    setModal: (type: ModalType) => void;
  }
  