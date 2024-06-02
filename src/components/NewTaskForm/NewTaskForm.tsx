import "./NewTaskForm.scss";

const NewTaskForm = () => {
  return (
    <form
      className="new-task-form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("sent");
        return;
      }}
    >
      <textarea
        name="task"
        className="new-task-form__input"
        id="task"
        placeholder="Enter your task..."
      ></textarea>
      <label htmlFor="date">Choose Date:</label>
      <input type="date" id="date" name="date" />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTaskForm;
