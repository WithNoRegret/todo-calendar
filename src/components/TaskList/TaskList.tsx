import Task from "../Task/Task";
import "./TaskList.scss";

const TaskList = () => {
  return (
    <div className="task-list">
      <button>Create new Task</button>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;
