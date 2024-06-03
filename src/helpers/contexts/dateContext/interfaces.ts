export interface dateContextValues {
    day: number | undefined;
    month: number | undefined;
    year: number | undefined;
    currentDay: number | undefined;
    currentMonth: number | undefined;
    currentYear: number | undefined;
    setDate: (date: Date) => void;
    setDay: (day: number) => void;
    setMonth: (month: number) => void;
    setYear: (year: number) => void;
}