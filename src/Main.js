import { Routes, Route } from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Menu from './Menu.js';
import Reservations from './Reservations.js';
import OrderOnline from './OrderOnline.js';
import Login from './Login.js';

function Main() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Main;