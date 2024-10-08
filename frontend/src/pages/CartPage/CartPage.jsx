import React from "react";
import "./CartPage.css"; // Ensure your CSS file is properly linked

const CartPage = ({
  cart,
  handleRemoveProduct,
  handleCheckOut,
  handleQuantityChange,
}) => {
  if (!cart) return <p>Loading...</p>;

  const totalItems = cart.products.reduce(
    (total, product) => total + product.quantity,
    0
  ); // Total number of items
  const uniqueItems = cart.products.length; // Number of unique product types

  if (cart.products.length > 0) {
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <p>
          Total Items: {totalItems} (in {uniqueItems} types)
        </p>{" "}
        {/* Displaying total and unique item counts */}
        <ul className="cart-list">
          {cart.products.map((product) => (
            <li key={product._id} className="cart-item">
              <img
                src={product.image}
                alt={product.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h2>
                  {product.name} - ${product.price.toFixed(2)}
                </h2>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveProduct(product._id)}>
                    Remove
                  </button>
                  <label>
                    Qty:
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(product._id, e.target.value)
                      }
                      min="1"
                      className="quantity-input"
                    />
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <p>Total Price: ${cart.totalPrice.toFixed(2)}</p>
          <button onClick={handleCheckOut} className="checkout-button">
            Checkout
          </button>
        </div>
      </div>
    );
  } else {
    return <p>Your cart is empty.</p>;
  }
};

export default CartPage;
