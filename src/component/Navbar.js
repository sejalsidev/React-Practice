import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className="navbar">
            <li ><Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/Emp/sejal">sejal</Link></li>
            <li> <Link to="/Emp/navadiya">navadiya</Link></li>
            <li> <Link to="/Filter">Filter</Link></li>
            <li> <Link to="/Contact">Contact</Link></li>
            <li> <Link to="/Login">Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar