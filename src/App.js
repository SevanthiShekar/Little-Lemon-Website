import HomePage from './HomePage.js';
import BookingPage from './BookingPage.js';
import './App.css';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/reservations" element={<BookingPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
