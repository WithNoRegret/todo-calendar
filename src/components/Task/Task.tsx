import "./Task.scss";

const Task = () => {
  return (
    <div className="task">
      Task
      <div className="task__buttons">
        <label htmlFor="task">done</label>
        <input type="checkbox" id="task" />
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Task;
