import { useDate } from "../../helpers/hooks/useDate";
import "./MainHeader.scss";

const MainHeader = () => {
  const { currentDay, currentMonth, currentYear } = useDate();

  return (
    <header className="header">
      <h1 className="header__title">Calendar to-do app</h1>
      <p className="header__date">
        today: {currentDay}.{currentMonth}.{currentYear}
      </p>
    </header>
  );
};

export default MainHeader;
