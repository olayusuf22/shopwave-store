import * as orderService from '../../services/orderservice';


const ProductsListPage = ({products, setCart}) => {
  async function handleAddToCart(productId) {
    const updatedCart = await orderService.addToCart(productId);
    setCart(updatedCart);
  }
  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsListPage;
