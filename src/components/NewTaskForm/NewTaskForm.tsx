import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { useModal } from "../../helpers/contexts/modalContext/useModal";
import "./NewTaskForm.scss";
import { useMobile } from "../../helpers/contexts/mobileContext/useMobile";
import { useTaskStorage } from "../../helpers/contexts/taskStorageContext/useTaskStorage";
const NewTaskForm = () => {
  const { day, month, year } = useDate();
  const { setModal, closeModal } = useModal();
  const { mobile } = useMobile();
  const { addTask } = useTaskStorage();

  const [date, setDate] = useState("");

  useEffect(() => {
    if (day && month && year) {
      const formattedMonth = month.toString().padStart(2, "0");
      const formattedDay = day.toString().padStart(2, "0");
      setDate(`${year}-${formattedMonth}-${formattedDay}`);
    }
  }, [day, month, year]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const taskInput = form.elements.namedItem("task") as HTMLInputElement;
    const taskValue = taskInput.value;
    addTask({ id: uuidv4(), body: taskValue, status: false }, date);
    if (mobile === "mobile") {
      closeModal();
    } else {
      setModal("list");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <h2>Create new task</h2>
      <textarea
        name="task"
        className="new-task-form__input"
        id="task"
        placeholder="Enter your task..."
        required
      ></textarea>
      <div className="new-task-form__input">
        <label htmlFor="date">Choose Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTaskForm;
