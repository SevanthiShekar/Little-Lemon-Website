import React from 'react'
import logo from './assets/bottom_logo.jpg'
const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="bottom-logo"></img>
        <h3>Doormat Navigation</h3>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>

        <h3>Contact</h3>
        <h5>Address</h5>
        <h5>Phone Number</h5>
        <h5>Email</h5>

        <h3>Social Media Links</h3>
    </footer>
  )
}

export default Footer
