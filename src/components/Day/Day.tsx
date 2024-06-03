import { useEffect, useState } from "react";
import { useDate } from "../../helpers/hooks/useDate";
import { useMobile } from "../../helpers/hooks/useMobile";
import { useModal } from "../../helpers/hooks/useModal";
import "./Day.scss";

const Day = ({ index }: { index: number }) => {
  const { openModal } = useModal();
  const { mobile } = useMobile();
  const { day } = useDate();

  const [today, setToday] = useState(false);

  useEffect(() => {
    if (day === index) {
      setToday(true);
    }
  }, [day, index]);

  const handleModal = () => {
    if (mobile === "desktop") {
      openModal("list");
    }
  };

  return (
    <div className={`day ${today ? "day--today" : ""}`} onClick={handleModal}>
      {index}
    </div>
  );
};

export default Day;
