import TaskList from "../TaskList/TaskList";

const TaskModal = () => {
  return (
    <dialog id="task-modal">
      <h1>TaskModal</h1>
      <TaskList />
      <button
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
