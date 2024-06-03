import { useModal } from "../../helpers/hooks/useModal";
import "./Day.scss";

const Day = ({ index }: { index: number }) => {
  const { openModal } = useModal();

  return (
    <div className="day" onClick={() => openModal("list")}>
      {index}
    </div>
  );
};

export default Day;
