const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="title">Title:</label>
        <input name="title" type="text" />
        <label htmlFor="time">Time</label>
        <input name="time" type="number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
