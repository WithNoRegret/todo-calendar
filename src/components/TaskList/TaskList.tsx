import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { useMobile } from "../../helpers/contexts/mobileContext/useMobile";
import { useModal } from "../../helpers/contexts/modalContext/useModal";
import Task from "../Task/Task";
import "./TaskList.scss";

const TaskList = () => {
  const { mobile } = useMobile();
  const { openModal } = useModal();
  const { day, month, year } = useDate();

  return (
    <div
      className={`task-list ${mobile === "mobile" ? "task-list--mobile" : ""}`}
    >
      <header className="task-list__header">
        <h1>{`Tasks for ${day}.${month}.${year}`}</h1>
      </header>
      <div className="task-list__body">
        <button
          className="task-list__create-button"
          onClick={() => openModal("task")}
        >
          Create new Task
        </button>
        <ul className="task-list__body">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
