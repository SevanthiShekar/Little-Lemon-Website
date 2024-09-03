import React from 'react'
import "./Navigation.css"
import font from "./assets/MarkaziText-VariableFont_wght.ttf"

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li><a href="/home" style={{color: "#333333", fontFamily: font}}>Home</a></li>
            <li><a href="/about" style={{color: "#333333"}}>About</a></li>
            <li><a href="/menu" style={{color: "#333333"}}>Menu</a></li>
            <li><a href="/reservations" style={{color: "#333333"}}>Reservations</a></li>
            <li><a href="/order-online" style={{color: "#333333"}}>Order Online</a></li>
            <li><a href="/login" style={{color: "#333333"}}>Login</a></li>
        </ul>
    </nav>
  )
}

export default Navigation
