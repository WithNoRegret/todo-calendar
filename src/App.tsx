import { useEffect, useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import MainHeader from "./components/MainHeader/MainHeader";
import TaskList from "./components/TaskList/TaskList";
import "./App.scss";
import TaskModal from "./components/TaskModal/TaskModal";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      <MainHeader />
      <Calendar />
      {isMobile && <TaskList mobile />}
      <TaskModal />
    </div>
  );
}

export default App;
