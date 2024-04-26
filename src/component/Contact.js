import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
        <h1>Contact Page</h1>
        <ul>
            <li ><Link to="/cannel">Channel</Link></li>
            <li> <Link to="/company">Company</Link></li>
            <li> <Link to="/others">Othes</Link></li>
            <Outlet/>
        </ul>
    </div>
    
  )
}

export default Contact