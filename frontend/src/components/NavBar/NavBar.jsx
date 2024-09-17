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
    <div>
      {/* Navigation Bar */}
      <nav className="NavBar">
        <img src={logo} alt="Logo" className="NavBar-logo" />

        
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {user ? (
            <>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/" onClick={handleLogOut}>Log Out</Link></li>
              <li>Welcome, {user.name}</li>
            </>
          ) : (
            <>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </>
          )}
        </ul>
      </nav>
  
      {/* Main Content */}
      <main>
        <section className="category-display">
          <h2>Featured Categories</h2>

          <ul className="categories">
            <li><Link to="/men">Men's Clothing</Link></li>
            <li><Link to="/women">Women's Clothing</Link></li>
            <li><Link to="/kids">Kids' Clothing</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/shoes">Shoes</Link></li>
            <li><Link to="/sale">Sale</Link></li>
          </ul>
        </section>
      </main>
  
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
