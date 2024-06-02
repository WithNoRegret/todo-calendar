import Task from "../Task/Task";
import "./TaskList.scss";

const TaskList = () => {
  return (
    <div className="task-list-wrapper">
      <button className="create-task">Create new Task</button>
      <ul className="task-list">
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
