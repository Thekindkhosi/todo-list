import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { IoAdd, IoCloseOutline } from "react-icons/io5";
import { z } from "zod";

export const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be more than 3 characters" }),
  time: z
    .number({ invalid_type_error: "Time is required." })
    .positive({ message: "Please enter a valid time for your task" }),
});

export type TodoFormData = z.infer<typeof schema>;

function App() {
  const [isOpenForm, setOpenForm] = useState(false);
  const [todoTask, setTodoTask] = useState<TodoFormData[]>([]);

  return (
    <>
      <button onClick={() => setOpenForm(!isOpenForm)}>
        {!isOpenForm ? <IoAdd /> : <IoCloseOutline />}
      </button>
      {isOpenForm && (
        <Form
          onSubmit={(todo) =>
            setTodoTask([
              ...todoTask,
              { ...todo, title: todo.title, time: todo.time },
            ])
          }
        />
      )}

      <ul>
        {todoTask.map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
