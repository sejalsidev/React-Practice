import { useState } from "react"

const Users = () => {
    const [loggedIn,setLoggedIn]=useState(false)
    const logIn =() => {
        setLoggedIn(true)
       
    }
    const logOut =() =>{
        setLoggedIn(false)
        
    }
  return (
    <div>
        <h1>Login Guest-User</h1>
        <button type="submit" onClick={logIn}>Login</button>
        <button type="submit" onClick={logOut}>logout</button>
        {loggedIn? "welcome user" : "welcome Guest"}
    </div>
  
  )
}

export default Users
