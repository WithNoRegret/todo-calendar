const NewTaskForm = () => {
  return (
    <form>
      <label htmlFor="task">Task</label>
      <input type="text" id="task" name="task" />
      <label htmlFor="date">Date</label>
      <input type="date" id="date" name="date" />
      <button>Add</button>
    </form>
  );
};

export default NewTaskForm;
