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
        
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
  
        {/* Conditional rendering based on user's login status */}
        {user ? (
          <>
            <Link to="/posts">Post List</Link>
            &nbsp; | &nbsp;
            <Link to="/posts/new">New Post</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            &nbsp;&nbsp;
            <span>Welcome, {user.name}</span>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            &nbsp; | &nbsp;
            <Link to="/signup">Sign Up</Link>
            &nbsp; | &nbsp;
            <Link to="/cart">Cart</Link>
          </>
        )}
      </nav>
  
      {/* Main Content */}
      <main>
        <section className="category-display">
          <h2>Featured Categories</h2>
          <div className="categories">
            <Link to="/men">Men's Clothing</Link>
            <Link to="/women">Women's Clothing</Link>
            <Link to="/kids">Kids' Clothing</Link>
          </div>
        </section>
      </main>
  
      {/* Footer */}
      <footer>
        <p>Ola© 2024 ShopWave Store. All rights reserved.</p>
        <Link to="/about">About Us</Link>
        &nbsp; | &nbsp;
        <Link to="/contact">Contact Us</Link>
      </footer>
    </div>
  );
}