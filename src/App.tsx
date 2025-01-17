import { useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import { IoAdd, IoCloseOutline } from "react-icons/io5";
import { z } from "zod";
import TaskCard from "./components/TaskCard";

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
      <div>
        <div className="openFormButtonContainer">
          <button
            className="openFormButton"
            onClick={() => setOpenForm(!isOpenForm)}
            onBlur={() => setOpenForm(false)}
          >
            {!isOpenForm ? <IoAdd /> : <IoCloseOutline />}
          </button>
        </div>
        {isOpenForm && (
          <div className="formContainer">
            <Form
              onSubmit={(todo) =>
                setTodoTask([
                  ...todoTask,
                  { ...todo, title: todo.title, time: todo.time },
                ])
              }
            />
          </div>
        )}
      </div>
      <TaskCard todoTask={todoTask} />
    </>
  );
}

export default App;
