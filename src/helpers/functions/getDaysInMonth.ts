export function getDaysInMonth (month: number | undefined, year: number | undefined): number {
    if (!month || !year) return 0;
    return new Date(year, month, 0).getDate();
}