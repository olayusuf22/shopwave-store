import * as orderService from '../../services/orderService';


const ProductsListPage = ({products}) => {
  async function handleAddToCart(productId) {
    const updatedCart = await orderService.addToCart(productId);
    console.log(updatedCart);

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
