import "./Task.scss";

interface TaskProps {
  id: number;
  body: string;
  status: boolean;
}

const Task = ({ id, body, status }: TaskProps) => {
  return (
    <div className="task">
      <p>
        {id} {body}
      </p>
      <div className="task__buttons">
        <div
          className={`task__status ${status ? "task__status--done" : ""}`}
        ></div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Task;
