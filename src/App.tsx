import { useEffect } from "react";
import Calendar from "./components/Calendar/Calendar";
import MainHeader from "./components/MainHeader/MainHeader";
import TaskList from "./components/TaskList/TaskList";
import "./App.scss";
import TaskModal from "./components/TaskModal/TaskModal";
import { useMobile } from "./helpers/contexts/mobileContext/useMobile";
function App() {
  const { mobile, setMobile } = useMobile();

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 991 ? "mobile" : "desktop");
    };
    window.addEventListener("resize", handleResize);
  }, [setMobile]);

  return (
    <div className="app">
      <MainHeader />
      <Calendar />
      {mobile === "mobile" && <TaskList />}
      <TaskModal />
    </div>
  );
}

export default App;
