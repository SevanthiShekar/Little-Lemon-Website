import React from 'react'
import Header from './Components/Header.js'
import Navigation from './Components/Navigation.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

const HomePage = () => {
    const style = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 30px",
      }
  return (
    <>
      <div style={style}>
         <Header/>
         <Navigation/>
      </div>
      <Main/>
      <Footer/>
    </>
  )
}

export default HomePage