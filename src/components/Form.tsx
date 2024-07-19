import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema, TodoFormData } from "../App";

interface Props {
  onSubmit: (data: TodoFormData) => void;
}

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({ resolver: zodResolver(schema) });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <label htmlFor="title">Title:</label>
        <input {...register("title")} name="title" type="text" />
        {errors.title && <p>{errors.title.message}</p>}
        <label htmlFor="time">Time</label>
        <input
          {...register("time", { valueAsNumber: true })}
          name="time"
          type="number"
        />
        {errors.time && <p>{errors.time.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
