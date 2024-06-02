import Day from "../Day/Day";
import TaskList from "../TaskList/TaskList";
import TaskModal from "../TaskModal/TaskModal";

import "./Calendar.scss";

const Calendar = () => {
  const days = Array(30).fill(0);
  return (
    <div>
      <div className="calendar">
        {days.map((_, index) => (
          <Day key={index} index={index} />
        ))}
      </div>
      <button
        onClick={() =>
          (
            document.getElementById("task-modal") as HTMLDialogElement
          )?.showModal()
        }
      >
        Open Modal
      </button>
      <TaskModal />
      <div className="visible-mobile mobile-task-list">
        <TaskList />
      </div>
    </div>
  );
};

export default Calendar;
