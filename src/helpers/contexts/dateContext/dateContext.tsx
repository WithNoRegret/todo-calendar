import { ReactNode, createContext, useState } from "react";
import { dateContextValues } from "./interfaces";

interface dateContextProps {
  children: ReactNode;
}

export const DateContext = createContext<dateContextValues | null>(null);

export const DateProvider = ({ children }: dateContextProps) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
  const [year, setYear] = useState<number | undefined>(currentYear);
  const [month, setMonth] = useState<number | undefined>(currentMonth);
  const [day, setDay] = useState<number | undefined>(currentDay);
  const setDate = (date: Date) => {
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    setDay(date.getDate());
  };
  const increaseMonth = () => {
    if (month === 12) {
      setMonth(1);
      year && setYear(year + 1);
    } else {
      month && setMonth(month + 1);
    }
  };
  const decreaseMonth = () => {
    if (month === 1) {
      setMonth(12);
      year && setYear(year - 1);
    } else {
      month && setMonth(month - 1);
    }
  };
  return (
    <DateContext.Provider
      value={{
        year,
        month,
        day,
        currentYear,
        currentMonth,
        currentDay,
        setDate,
        setDay,
        setMonth,
        setYear,
        increaseMonth,
        decreaseMonth,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
