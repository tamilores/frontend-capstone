import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './api';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Menu from './Menu.js';
import Reservations from './Reservations.js';
import BookingPage from './BookingPage.js';
import Login from './Login.js';
import ConfirmedBooking from './ConfirmedBooking.js';

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === 'update') {
    const dateObj = new Date(action.date);
    return fetchAPI(dateObj);
  }
  return state;
}

function Main() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={
          <BookingPage
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}/>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default Main;