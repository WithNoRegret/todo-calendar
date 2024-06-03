import { useTaskStorage } from "../../helpers/contexts/taskStorageContext/useTaskStorage";
import "./Task.scss";

interface TaskProps {
  id: string;
  body: string;
  status: boolean;
}

const Task = ({ id, body, status }: TaskProps) => {
  const { deleteTask, SetTaskStatus } = useTaskStorage();

  return (
    <div className="task">
      <p className="task__body">{body}</p>
      <div className="task__buttons">
        Status:
        <div
          className={`task__status ${status ? "task__status--done" : ""}`}
          onClick={() => SetTaskStatus(id, !status)}
        ></div>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
