import { useEffect, useState } from "react";
import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { getDaysInMonth } from "../../helpers/functions/getDaysInMonth";
import Day from "../Day/Day";
import { monthNames } from "../../helpers/constants/monthNames";
import "./Calendar.scss";
import { useMobile } from "../../helpers/contexts/mobileContext/useMobile";

const Calendar = () => {
  const { month, year, increaseMonth, decreaseMonth } = useDate();
  const [days, setDays] = useState<number[]>([]);
  const { mobile } = useMobile();
  useEffect(() => {
    const MonthLength = getDaysInMonth(month, year);
    const daysArray = Array.from({ length: MonthLength }, (_, i) => i + 1);
    setDays(daysArray);
  }, [month, year]);
  return (
    <div className="calendar">
      <header
        className={`calendar__header ${
          mobile === "mobile" ? "calendar__header--mobile" : ""
        }`}
      >
        {mobile === "desktop" && (
          <button
            className="calendar__button"
            onClick={() => month && decreaseMonth()}
          >
            &lt; Previous month
          </button>
        )}
        {month && year && (
          <h1 className="calendar__title">
            {monthNames[month - 1]} {year}
          </h1>
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
        {days.map((day) => (
          <Day key={day} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
