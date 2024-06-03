import { useEffect, useRef } from "react";
import TaskList from "../TaskList/TaskList";
import "./TaskModal.scss";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import { useModal } from "../../helpers/hooks/useModal";

const TaskModal = () => {
  const { isModalOpen, closeModal, modalType } = useModal();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && isModalOpen) {
      dialog.showModal();
    } else if (dialog) {
      dialog.close();
    }
  }, [isModalOpen]);

  return (
    <dialog id="task-modal" className="task-modal" ref={dialogRef}>
      <div className="task-modal__inner">
        <header className="task-modal__header">
          <h1>TaskModal</h1>
          <button
            className="task-modal__close-button"
            onClick={() => closeModal()}
          >
            Close
          </button>
        </header>
        <div className="task-modal__body">
          {modalType === "task" ? <NewTaskForm /> : <TaskList />}
        </div>
      </div>
    </dialog>
  );
};

export default TaskModal;
