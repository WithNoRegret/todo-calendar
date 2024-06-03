import { createContext, useState, ReactNode } from "react";

type ModalType = "list" | "task";

interface ModalContextValues {
  isModalOpen: boolean;
  modalType: ModalType;
  openModal: (type?: ModalType) => void;
  closeModal: () => void;
  setModal: (type: ModalType) => void;
}

interface ModalContextProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextValues | null>(null);

export const ModalProvider = ({ children }: ModalContextProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("list");

  const openModal = (type: ModalType = "list") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const setModal = (type: ModalType) => setModalType(type);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalType, openModal, closeModal, setModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
