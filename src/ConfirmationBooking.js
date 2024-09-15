import React from 'react'
import Header from './Components/Header.js'
import Navigation from './Components/Navigation.js'
import Footer from './Components/Footer.js'

const ConfirmationBooking = () => {
  const style = {
        fontFamily: "Karla",
        fontWeight: "bold",
        fontSize: "1.25rem",
        color: "green",
        marginLeft: "60px",
        marginTop: "70px",
        marginBottom: "215px"
  }
  const hstyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 30px",
  }
  return (
    <>
    <div style={hstyle}>
         <Header/>
         <Navigation/>
    </div>
      <h2 style={style}>
      Your Reservation Has Been Confirmed! Please Check Registered E-Mail!</h2>
    <Footer/>
    </>
  )
}

export default ConfirmationBooking
