import { useContext } from "react";
import { TaskStorageValues } from "./interfaces";
import { TaskStorageContext } from "./TaskStorageContext";

export const useTaskStorage = (): TaskStorageValues => {
    const context = useContext(TaskStorageContext);
    if (context === undefined) {
      throw new Error("useModal must be used within a ModalProvider");
    }
    return context as TaskStorageValues;
  };
  