import { useDate } from "../../helpers/hooks/useDate";
import "./MainHeader.scss";

const MainHeader = () => {
  const { day, month, year } = useDate();

  return (
    <header className="header">
      <h1 className="header__title">Calendar to-do app</h1>
      <p className="header__date">
        today: {day}.{month}.{year}
      </p>
    </header>
  );
};

export default MainHeader;
