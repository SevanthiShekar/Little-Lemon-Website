import React from 'react'
import logo from './assets/Logo.jpg'

const Header = () => {
  const style = {
    height: "50px",
    width: "200px",
    marginTop: "10px"
  }
  return (
    <header>
        <img src={logo} alt="logo" style={style}></img>
    </header>
  )
}

export default Header