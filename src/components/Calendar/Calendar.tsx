import { useEffect, useState } from "react";
import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { getDaysInMonth } from "../../helpers/functions/getDaysInMonth";
import Day from "../Day/Day";
import { monthNames } from "../../helpers/constants/monthNames";
import { weekDaysNames } from "../../helpers/constants/weekDaysNames";
import "./Calendar.scss";
import { useMobile } from "../../helpers/contexts/mobileContext/useMobile";

const Calendar = () => {
  const { month, year, increaseMonth, decreaseMonth } = useDate();
  const [days, setDays] = useState<number[]>([]);
  const { mobile } = useMobile();

  useEffect(() => {
    if (!month || !year) return;
    const MonthLength = getDaysInMonth(month, year);
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
    const daysArray = Array.from({ length: MonthLength }, (_, i) => i + 1);
    const leadingEmptyDays = Array(firstDayOfWeek).fill(null);
    const completeDaysArray = [...leadingEmptyDays, ...daysArray];
    setDays(completeDaysArray);
  }, [month, year]);

  return (
    <div className="calendar">
      <header className="calendar__header">
        {mobile === "desktop" && (
          <button
            className="calendar__button"
            onClick={() => month && decreaseMonth()}
          >
            &lt; Previous month
          </button>
        )}
        {month && year && (
          <h2 className="calendar__title">
            {monthNames[month - 1]} {year}
          </h2>
        )}
        {mobile === "desktop" && (
          <button
            className="calendar__button"
            onClick={() => month && increaseMonth()}
          >
            Next month &gt;
          </button>
        )}
      </header>
      {month && year && <h1 className="calendar__title"></h1>}
      <div className="calendar__body">
        {weekDaysNames.map((day) => (
          <div key={day} className="calendar__day-name">
            {mobile === "desktop" ? day : day[0]}
          </div>
        ))}
        {days.map((day) => {
          if (day) {
            return <Day key={day} day={day} />;
          } else {
            return <div />;
          }
        })}
      </div>
    </div>
  );
};

export default Calendar;
