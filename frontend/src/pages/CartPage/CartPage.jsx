import "./CartPage.css";

const CartPage = ({cart, handleRemoveProduct, handleCheckOut}) => {
  if (!cart) return <p>Loading...</p>;

  if (cart.products.length > 0) {
    return (
      <div>
        <h1>Your Cart</h1>
        <ul>
          {cart.products.map(product => (
            <li key={product._id}>
              {product.name}
              <button onClick={() => handleRemoveProduct(product._id)} >Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${cart.totalPrice.toFixed(2)}</p>
        <button onClick={handleCheckOut}>Checkout</button>
      </div>
    );

  } else {
    return <p>Your cart is empty</p>;
  }

};

export default CartPage;