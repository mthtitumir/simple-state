import { useContext } from "react"
import { TTodo, TodoContext } from "../../context/TodoProvider"

export const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);
  console.log(state);
  
  return (
    <div>
        {
            state?.map((item: TTodo) => <p key={item.id} className="cursor-pointer border border-sky-600 my-5 p-3"  onClick={()=> dispatch({type: "taskComplete", payload: item.id })} >{item.title} <span>✅</span></p>)
        }
    </div>
  )
}
