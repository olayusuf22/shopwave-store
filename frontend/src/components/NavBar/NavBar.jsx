import { Link } from 'react-router-dom';
import * as authService from '../../services/authService';
import './NavBar.css';
import logo from '../../assets/logo.png';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    authService.logOut();
    setUser(null);
  }

  return (
    <div className="wrapper">
      {/* Navigation Bar */}
      <nav className="NavBar">
        <img src={logo} alt="Logo" className="NavBar-logo" />

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          {user ? (
            <>
              <li><Link to="/" onClick={handleLogOut}>Log Out</Link></li>
              <li className="user-greeting">Welcome, {user.name}</li>
            </>
          ) : (
            <>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
          <li><Link to="/cart">Cart</Link></li>
        </ul>

        <form className="search-form">
          <input type="text" placeholder="Search products..." />
          <button type="submit">Search</button>
        </form>
      </nav>

      {/* Footer */}
      <footer>
        <ul className="footer-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <p>Ola©2024 ShopWave Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
