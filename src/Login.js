import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [emailErr,setemailErr] = useState(false);
    const [pwdErr,setpwdErr] = useState(false)
    function loginHandle(e){
        if(email.length<3 || pwd.length<3){
            alert("corrct value")
        }
        else{
            alert("good value")
        }
        e.preventDefault()
    }
    function emailHandler(e){
        const item = e.target.value
        if(item.length<3){
            setemailErr(true)
        }
        else{
            setemailErr(false)
        }
        setEmail(item)
    }
    function pwdHandler(e){
        const item = e.target.value
        if(item.length<3){
            setpwdErr(true)
        }
        else{
            setpwdErr(false)
        }
        setPwd(item)
    }
    return(
    <div>
        <h1>Login</h1>
        <form onSubmit={loginHandle}>
             <input type="text" placeholder='Enter Email ID:' onChange={emailHandler}/>{emailErr?<span>Enter valid Email ID</span>:""}<br /><br />
             <input type="password" placeholder='Enter Password' onChange={pwdHandler}/>{pwdErr?<span>Enter valid Password</span>:""}<br /><br />
             <button type="submit">Login</button>
        </form>
    </div>
    )
       
}
export default Login