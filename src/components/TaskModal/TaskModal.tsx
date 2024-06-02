import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import "./TaskModal.scss";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

const TaskModal = () => {
  const [newTask, setNewTask] = useState(false);
  return (
    <dialog id="task-modal" className="task-modal">
      <h1>TaskModal</h1>
      {newTask ? <NewTaskForm /> : <TaskList />}
      <button onClick={() => setNewTask(!newTask)}>Add new Task</button>
      <button
        className="close-modal"
        onClick={() =>
          (document.getElementById("task-modal") as HTMLDialogElement)?.close()
        }
      >
        Close
      </button>
    </dialog>
  );
};

export default TaskModal;
