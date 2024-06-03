import { useEffect, useState } from "react";
import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { useMobile } from "../../helpers/contexts/mobileContext/useMobile";
import { useModal } from "../../helpers/contexts/modalContext/useModal";
import "./Day.scss";

interface dayProps {
  date: number;
}

const Day = ({ date }: dayProps) => {
  const { openModal } = useModal();
  const { mobile } = useMobile();
  const { currentDay, setDay } = useDate();

  const [today, setToday] = useState(false);

  useEffect(() => {
    if (currentDay === date) {
      setToday(true);
    }
  }, [currentDay, date]);

  const handleModal = () => {
    setDay(date);
    if (mobile === "desktop") {
      openModal("list");
    }
  };

  return (
    <div className={`day ${today ? "day--today" : ""}`} onClick={handleModal}>
      {date}
    </div>
  );
};

export default Day;
