import { useEffect, useRef } from "react";
import TaskList from "../TaskList/TaskList";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import { useModal } from "../../helpers/hooks/useModal";
import { useDate } from "../../helpers/hooks/useDate";
import "./TaskModal.scss";

const TaskModal = () => {
  const { isModalOpen, closeModal, modalType } = useModal();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { day, month, year } = useDate();

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
          <h1>{`Tasks for ${day}.${month}.${year}`}</h1>
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
