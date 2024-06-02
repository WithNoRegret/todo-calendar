import TaskList from "../TaskList/TaskList";
import "./TaskModal.scss";

const TaskModal = () => {
  return (
    <dialog id="task-modal" className="task-modal">
      <h1>TaskModal</h1>
      <TaskList />
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
