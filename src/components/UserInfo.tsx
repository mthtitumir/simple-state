// user = {name = "", age = "" .................}

import { useState } from "react"

const UserInfo = () => {
    const [user, setUser] = useState({name: "", age: 0, hobbies: []});
    console.log(user);
    
    return (
    <div>
        <form className="flex flex-col">
            <input onChange={(e)=> setUser({...user, name: e.target.value})} className="border border-purple-300 m-10 px-5 py-3" type="text" name="name" id="name" placeholder="Name" />
            <input onChange={(e)=> setUser({...user, age: e.target.value})} className="border border-purple-300 m-10 px-5 py-3" type="number" name="age" id="age" placeholder="Age" />
            <input onBlur={(e)=> setUser({...user, hobbies: [...user.hobbies, e.target.value]})} className="border border-purple-300 m-10 px-5 py-3" type="text" name="hobbies" id="hobbies" placeholder="Hobbies" />
            <button type="submit" className="border border-red-600">Submit</button>
        </form>
    </div>
  )
}

export default UserInfo