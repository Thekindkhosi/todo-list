import { TodoFormData } from "../App";
import "./TaskCard.scss";

interface Props {
  todoTask: TodoFormData[];
}

const TaskCard = ({ todoTask }: Props) => {
  return (
    <div className="todoListCard">
      <ul>
        {todoTask.map((todo, index) => (
          <li key={index}>
            <h1>{todo.title}</h1>
            <p>Estimated time: {todo.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskCard;
