import { useEffect, useState } from "react";
import { useDate } from "../../helpers/contexts/dateContext/useDate";
import { useModal } from "../../helpers/contexts/modalContext/useModal";
import "./NewTaskForm.scss";
import { useMobile } from "../../helpers/contexts/mobileContext/useMobile";

const NewTaskForm = () => {
  const { day, month, year } = useDate();
  const { setModal, closeModal } = useModal();
  const { mobile } = useMobile();

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
    console.log("sent");
    if (mobile === "mobile") {
      closeModal();
    } else {
      setModal("list");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <h1>Create new task</h1>
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
