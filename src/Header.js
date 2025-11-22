import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <header>
        <img src="Logo.svg" alt="Little Lemon Logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/orderonline">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;