import { useEffect, useState } from "react";
import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { useMobile } from "../../helpers/contexts/mobileContext/useMobile";
import { useModal } from "../../helpers/contexts/modalContext/useModal";
import "./Day.scss";
import { useTaskStorage } from "../../helpers/contexts/taskStorageContext/useTaskStorage";
import { formatDate } from "../../helpers/functions/formatDate";
import { isDayOff } from "../../helpers/functions/isDayOff";

interface dayProps {
  day: number;
}

const Day = ({ day }: dayProps) => {
  const { openModal } = useModal();
  const { mobile } = useMobile();
  const { currentDay, currentMonth, currentYear, month, year, setDay } =
    useDate();
  const { tasks } = useTaskStorage();

  const [today, setToday] = useState(false);
  const [dayOff, setDayOff] = useState(false);
  const formatedDate = formatDate(year, month, day);

  useEffect(() => {
    if (currentDay === day && currentMonth === month && currentYear === year) {
      setToday(true);
    } else {
      setToday(false);
    }
  }, [currentDay, currentMonth, currentYear, day, month, year]);

  const handleModal = () => {
    setDay(day);
    if (mobile === "desktop") {
      openModal("list");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await isDayOff(year, month, day);
      setDayOff(data);
    };

    fetchData();
  }, [day, month, year]);

  return (
    <div
      className={`day ${today ? "day--today" : ""} ${dayOff ? "day--off" : ""}`}
      onClick={handleModal}
    >
      {day}
      {mobile === "desktop" &&
        tasks
          .filter((task) => task.date === formatedDate)
          .map((task, index) => {
            if (index < 2) {
              return (
                <div
                  key={task.task.id}
                  className={`day__task day__task--${task.task.status}`}
                >
                  {task.task.body}
                </div>
              );
            }
          })}
    </div>
  );
};

export default Day;
