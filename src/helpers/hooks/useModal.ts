import { useContext } from "react";
import { ModalContextValues } from "../interfaces";
import { ModalContext } from "../contexts/modalContext";

export const useModal = (): ModalContextValues => {
    const context = useContext(ModalContext);
    if (context === undefined) {
      throw new Error("useModal must be used within a ModalProvider");
    }
    return context as ModalContextValues;
  };
  