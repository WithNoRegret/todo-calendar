import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { useModal } from "../../helpers/contexts/modalContext/useModal";
import Task from "../Task/Task";
import { monthNames } from "../../helpers/constants/monthNames";
import "./TaskList.scss";
import { useTaskStorage } from "../../helpers/contexts/taskStorageContext/useTaskStorage";
import { formatDate } from "../../helpers/functions/formatDate";

const TaskList = () => {
  const { openModal } = useModal();
  const { day, month, year } = useDate();
  const { tasks } = useTaskStorage();
  const formattedDate = formatDate(year, month, day);

  return (
    <div className="task-list">
      <header className="task-list__header">
        <h2 className="task-list__title">{`Tasks for ${
          month && monthNames[month - 1]
        } ${day} ${year}`}</h2>
      </header>
      <div className="task-list__body">
        <button
          className="task-list__create-button"
          onClick={() => openModal("task")}
        >
          Create new Task
        </button>
        <ul className="task-list__list">
          {tasks
            .filter((task) => task.date === formattedDate)
            .map((task) => (
              <Task
                key={task.task.id}
                id={task.task.id}
                body={task.task.body}
                status={task.task.status}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
