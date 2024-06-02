import Day from "../Day/Day";

import "./Calendar.scss";

const Calendar = () => {
  const days = Array(30).fill(0);
  return (
      <div className="calendar">
        {days.map((_, index) => (
          <Day key={index} index={index} />
        ))}
      </div>
  );
};

export default Calendar;
