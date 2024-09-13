import React from 'react'
import Header from './Components/Header.js'
import Navigation from './Components/Navigation.js'
import BookingForm from './BookingForm.js'
import Footer from './Components/Footer.js'

function BookingPage() {
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
      <BookingForm/>
      <Footer/>
    </>
  )
}

export default BookingPage
