import { useEffect, useRef, useState } from "react";
import TaskList from "../TaskList/TaskList";
import "./TaskModal.scss";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

const TaskModal = () => {
  const [newTask, setNewTask] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && isOpen) {
      dialog.showModal();
    } else if (dialog) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog id="task-modal" className="task-modal" ref={dialogRef}>
      <div className="task-modal-inner">
        <header className="modal-header">
          <h1>TaskModal</h1>
          <button className="close-modal" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <button onClick={() => setNewTask(!newTask)}>New</button>
        </header>
        <div className="modal-body">
          {newTask ? <NewTaskForm /> : <TaskList />}
        </div>
      </div>
    </dialog>
  );
};

export default TaskModal;
