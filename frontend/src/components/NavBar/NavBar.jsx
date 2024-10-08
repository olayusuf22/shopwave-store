import { Link } from 'react-router-dom';
import * as authService from '../../services/authService';
import './NavBar.css';

export default function NavBar({ cart, user, setUser }) {
  function handleLogOut() {
    authService.logOut();
    setUser(null);
  }

  return (
    <div className="wrapper">
      {/* Navigation Bar */}
      <nav className="NavBar">

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
          <li><Link to="/cart">Cart {cart?.products?.length || 0}</Link></li>
        </ul>

        <form className="search-form">
          <input type="text" placeholder="Search products..." />
          <button type="submit">Search</button>
        </form>
      </nav>

      {/* Footer */}
      
    </div>
  );
}
