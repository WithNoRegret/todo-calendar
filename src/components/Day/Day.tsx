import { useEffect, useState } from "react";
import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { useMobile } from "../../helpers/contexts/mobileContext/useMobile";
import { useModal } from "../../helpers/contexts/modalContext/useModal";
import "./Day.scss";

interface dayProps {
  day: number;
}

const Day = ({ day }: dayProps) => {
  const { openModal } = useModal();
  const { mobile } = useMobile();
  const { currentDay, currentMonth, currentYear, month, year, setDay } =
    useDate();

  const [today, setToday] = useState(false);

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

  return (
    <div className={`day ${today ? "day--today" : ""}`} onClick={handleModal}>
      {day}
    </div>
  );
};

export default Day;
