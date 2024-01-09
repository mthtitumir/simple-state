import { FormEvent, useContext, useState } from "react"
import { TodoContext } from "../../context/TodoProvider";

export const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");
  // console.log(state);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({type: "addTodo", payload: todo});

  }
  return (
    <div>
      <h1>Add todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Task</label> <br />
        <input className="my-5 p-2 outline-none border border-sky-500 focus:outline-none" onBlur={(e) => setTask(e.target.value)} type="text" name="todo" id="todo" placeholder="Enter task name" /> <br />
        <button className=" outline-none border border-sky-500 " type="submit">Submit</button>
      </form>

    </div>
  )
}
