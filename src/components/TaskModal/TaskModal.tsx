import { useEffect, useRef } from "react";
import TaskList from "../TaskList/TaskList";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import { useModal } from "../../helpers/contexts/modalContext/useModal";
import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { useMobile } from "../../helpers/contexts/mobileContext/useMobile";
import "./TaskModal.scss";

const TaskModal = () => {
  const { isModalOpen, closeModal, modalType } = useModal();
  const { mobile } = useMobile();
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
    <dialog
      id="task-modal"
      className={`task-modal ${
        mobile === "mobile" ? "task-modal--mobile" : ""
      }`}
      ref={dialogRef}
    >
      <div className="task-modal__inner">
        <header className="task-modal__header">
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
