import { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import MainHeader from "./components/MainHeader/MainHeader";
import TaskList from "./components/TaskList/TaskList";
import "./App.scss";
import TaskModal from "./components/TaskModal/TaskModal";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 991);
  });

  return (
    <div className="app">
      <MainHeader />
      <Calendar />
      {isMobile && (
        <div className="task-list-container">
          <TaskList />
        </div>
      )}
      <TaskModal />
    </div>
  );
}

export default App;
