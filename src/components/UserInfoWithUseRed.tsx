import { ChangeEvent, useReducer } from "react"

type TAction = {
    type: string;
    payload: string
}

const initialState = {
    name: "",
    age: "",
    hobbies: [] as string[],
}
const reducer = (currentState: typeof initialState, action: TAction) =>{
    switch (action.type) {
        case "addName":
            return { ...currentState, name: action.payload }
        case "addAge":
            return { ...currentState, age: action.payload }
        case "addHobby":
            return { ...currentState, hobbies: [...currentState.hobbies, action.payload] }
        default:
            return currentState;
    }
}
const UserInfoWithUseRed = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(state);
        
    }    
  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input onChange={(e)=>dispatch({type: "addName", payload: e.target.value})} className="border border-purple-300 m-10 px-5 py-3" type="text" name="name" id="name" placeholder="Name" />
            <input onChange={(e)=>dispatch({type: "addAge", payload: e.target.value})} className="border border-purple-300 m-10 px-5 py-3" type="text" name="age" id="age" placeholder="Age" />
            <input onBlur={(e)=>dispatch({type: "addHobby", payload: e.target.value})} className="border border-purple-300 m-10 px-5 py-3" type="text" name="hobbies" id="hobbies" placeholder="Hobbies" />
            <button type="submit" className="border border-red-600">Submit</button>
        </form>
    </div>
  )
}

export default UserInfoWithUseRed