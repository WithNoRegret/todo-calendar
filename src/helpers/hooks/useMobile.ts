import { useContext } from "react";
import { MobileContext } from "../contexts/mobileContext";
import { MobileContextValues } from "../interfaces";

export const useMobile = (): MobileContextValues => {
    const context = useContext(MobileContext);
    if (context === undefined) {
      throw new Error("useMobile must be used within a MobileProvider");
    }
    return context as MobileContextValues;
  }