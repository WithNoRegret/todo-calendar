import { useContext } from "react";
import { DateContext } from "../contexts/dateContext";
import { dateContextValues } from "../interfaces";

export const useDate = (): dateContextValues => {
    const context = useContext(DateContext);
    if (context === undefined) {
        throw new Error("useDate must be used within a DateProvider");
    }
    return context as dateContextValues;
}