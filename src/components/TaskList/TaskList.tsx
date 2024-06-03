import Task from "../Task/Task";
import "./TaskList.scss";

interface TaskListProps {
  mobile?: boolean;
}

const TaskList = ({ mobile = false }: TaskListProps) => {
  return (
    <div className={`task-list ${mobile ? "task-list--mobile" : ""}`}>
      <button className="task-list__create-button">Create new Task</button>
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
  );
};

export default TaskList;
