import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
const Login = () => {
    const login=() =>{
        const name = document.getElementById('lname').value;
        const password =document.getElementById('password').value;
        const data = {
            name:name,
            password:password
        }
        localStorage.setItem('login',data);
        navigate('/about')
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login){
            navigate('/about')
        }
})
  return (
    <div>
        <h1>Login</h1>
        <input type="text" id='lname'/><br/>
        <input type="text" id='password'/><br/>
        <button type="submit" onclick={login}>Login</button>
    </div>
  )
}

export default Login