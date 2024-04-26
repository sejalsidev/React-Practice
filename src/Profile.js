import {useState} from 'react'

const Profile = () => {
    const [loggedIn,setLoggedIn] = useState(false)
    if(loggedIn){
        return (
            <div>Profile Component</div>
          )
    }
    else{
        return (
            <div>User Component</div>
          )
    }
  
}

export default Profile