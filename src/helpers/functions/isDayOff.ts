export const isDayOff = async (year: number | undefined, month: number | undefined, day: number | undefined): Promise<boolean> => {
    if (!year || !month || !day) return true;

    const paddedMonth = month.toString().padStart(2, '0');
    const paddedDay = day.toString().padStart(2, '0');

    try {
        const response = await fetch(`https://isdayoff.ru/${year}${paddedMonth}${paddedDay}`,
            {
                method: 'GET'
            });
        const data = await response.text();
        return data === '1';
    } catch (error) {
        console.error('Error fetching day off status:', error);
        return false;
    }
}