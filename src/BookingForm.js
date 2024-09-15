import React, { useState } from 'react'
import './Components/Form.css'
function BookingForm(props) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOcassion] = useState();

  let [availableTimes, setavailableTimes] = useState(["17:00", "19:00", "20:00", "21:00"]);

  function handleSubmit(e)
  {
    e.preventDefault();
    props.submitForm(e);
    console.log(date);
    console.log(time);
    console.log(guests);
    console.log(occasion);
    const message = document.getElementById("message");
    if( date == undefined || time == undefined ||
        guests == undefined || occasion == undefined)
        {
            message.textContent  = "Please select all the necessary details!";
        }
    else
    {
        availableTimes = availableTimes.filter( t => t == time? "": t);
        console.log(availableTimes);
        message.style.display = "none";
    }
  }


  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
   <>
    <h1>Reservations</h1>

    <p className='message' id='message'></p>

    <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={(e) => handleChange(e.target.value)} required/><br/>

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " onChange={e => setTime(e.target.value)} required>
            {availableTimes.map( time => <option key={time}>{time}</option>)}
        </select><br/>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={e => setGuests(e.target.value)} required/><br/>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={e => setOcassion(e.target.value)} required>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
        </select><br/>

        <input type="submit" value="Make Your reservation"/>
    </form>
   </>
  )
}

export default BookingForm
