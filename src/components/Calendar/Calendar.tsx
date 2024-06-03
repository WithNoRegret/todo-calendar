import { useEffect, useState } from "react";
import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { getDaysInMonth } from "../../helpers/functions/getDaysInMonth";
import Day from "../Day/Day";

import "./Calendar.scss";

const Calendar = () => {
  const { month, year } = useDate();
  const [days, setDays] = useState<number[]>([]);
  useEffect(() => {
    const MonthLength = getDaysInMonth(month, year);
    const daysArray = Array.from({ length: MonthLength }, (_, i) => i + 1);
    setDays(daysArray);
  }, [month, year]);
  return (
    <div className="calendar">
      {days.map((date) => (
        <Day key={date} date={date} />
      ))}
    </div>
  );
};

export default Calendar;
