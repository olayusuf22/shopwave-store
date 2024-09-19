import "./CartPage.css";

const CartPage = ({cart, handleRemoveProduct}) => {
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
      </div>
    );

  } else {
    return <p>Your cart is empty</p>;
  }

};

export default CartPage;