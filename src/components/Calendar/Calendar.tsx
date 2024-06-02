import Day from "../Day/Day";
import TaskModal from "../TaskModal/TaskModal";

import "./Calendar.scss";

const Calendar = () => {
  const days = Array(30).fill(0);
  return (
    <div className="calendar">
      {days.map((_, index) => (
        <Day key={index} index={index} />
      ))}
      <TaskModal />
      <button
        onClick={() =>
          (
            document.getElementById("task-modal") as HTMLDialogElement
          )?.showModal()
        }
      >
        Open Modal
      </button>
    </div>
  );
};

export default Calendar;
