import React from 'react';


const ProductsListPage = ({products}) => {
  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsListPage;
