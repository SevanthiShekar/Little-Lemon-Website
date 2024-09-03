import React from 'react'
import logo from './assets/bottom_logo.jpg'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <img src={logo} alt="bottom-logo"></img>
        <div>
            <h3>Doormat Navigation</h3>
              <a href="/home">Home</a><br/>
              <a href="/about">About</a><br/>
              <a href="/menu">Menu</a><br/>
              <a href="/reservations">Reservations</a><br/>
              <a href="/order-online">Order Online</a><br/>
              <a href="/login">Login</a>
        </div>

        <div>
           <h3>Contact</h3>
           <p>21st Jump Street, Downtown Chicago</p>
           <p>6904-2095-5678</p>
           <p>littlelemonbusiness@gmail.com</p>
        </div>

        <div>
          <h3>Social Media Links</h3>
            <a href="https://www.instagram.com/">Instagram</a><br/>
            <a href="https://www.facebook.com/">Facebook</a><br/>
            <a href="https://twitter.com/">X</a><br/>
        </div>
    </footer>
  )
}

export default Footer
