export const formatDate = (year: number | undefined, month: number | undefined, day: number | undefined): string => {
    if (!year || !month || !day) return '';
    const paddedMonth = month.toString().padStart(2, '0');
    const paddedDay = day.toString().padStart(2, '0');
    return `${year}-${paddedMonth}-${paddedDay}`;
};