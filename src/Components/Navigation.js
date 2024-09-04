import React from 'react'
import "./Navigation.css"
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/" style={{color: "#333333"}}>Home</Link></li>
            <li><Link to="/about" style={{color: "#333333"}}>About</Link></li>
            <li><Link to="/menu" style={{color: "#333333"}}>Menu</Link></li>
            <li><Link to="/reservations" style={{color: "#333333"}}>Reservations</Link></li>
            <li><Link to="/order-online" style={{color: "#333333"}}>Order Online</Link></li>
            <li><Link to="/login" style={{color: "#333333"}}>Login</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation