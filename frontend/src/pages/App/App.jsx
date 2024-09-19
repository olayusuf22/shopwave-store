import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { getUser } from '../../services/authService';
import './App.css'; 
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import CartPage from '../CartPage/CartPage';
import ProductsListPage from '../ProductsListPage/ProductsListPage';
import * as productsService from '../../services/productService';
import * as ordersService from '../../services/orderService';





function App() {
  const [user, setUser] = useState(getUser());
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const products = await productsService.getAll();
      setProducts(products);
    }
    getProducts();
  }, [])

  useEffect(() => {
    async function getCart() {
      const cart = await ordersService.getCart();
      setCart(cart);
    }
    if (user) {
      getCart();
    } else {
      setCart(null);
    }
  }, [user])

  async function handleRemoveProduct(productId) {
    const updatedCart = await ordersService.removeFromCart(productId);
    setCart(updatedCart);
  }

  return (
    <main id="react-app">
      <NavBar user={user} setUser={setUser} />
      <section id="main-section">
        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInPage setUser={setUser} />} />
            <Route path="/products" element={<ProductsListPage setCart={setCart} products={products} />} />
            
            <Route path="/cart" element={<CartPage handleRemoveProduct={handleRemoveProduct} cart={cart} />} />  {/* Cart Route for logged-in users */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInPage setUser={setUser} />} />
            <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </section>
      <footer>
        <ul className="footer-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <p>Ola©2024 ShopWave Store. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
