import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../services/authService';
import { GiShoppingCart } from "react-icons/gi";
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import Cart from '../../components/Cart/Cart';
import ProductsListPage from '../ProductsListPage/ProductsListPage';
import * as productsService from '../../services/productService';


function App() {
  const [user, setUser] = useState(getUser());
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const products = await productsService.getAll();
      setProducts(products);
    }
    getProducts();
  }, [])

  return (
    <main id="react-app">
      <NavBar user={user} setUser={setUser} />
      <section id="main-section">
        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInPage setUser={setUser} />} />
            <Route path="/products" element={<ProductsListPage />} />
            <Route path="/cart" element={<GiShoppingCart />} />  {/* Cart Route for logged-in users */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInPage setUser={setUser} />} />
            <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
            <Route path="/cart" element={<GiShoppingCart />} />  {/* Cart Route for guests */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </section>
    </main>
  );
}

export default App;
