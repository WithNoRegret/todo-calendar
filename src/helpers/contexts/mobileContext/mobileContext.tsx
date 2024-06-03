import { createContext, useState } from "react";
import { MobileType, MobileContextValues } from "./interfaces";

interface MobileContextProps {
  children: React.ReactNode;
}

export const MobileContext = createContext<MobileContextValues | null>(null);

export const MobileProvider = ({ children }: MobileContextProps) => {
  const [mobile, setMobile] = useState<MobileType>(
    window.innerWidth <= 991 ? "mobile" : "desktop"
  );
  return (
    <MobileContext.Provider value={{ mobile, setMobile }}>
      {children}
    </MobileContext.Provider>
  );
};
