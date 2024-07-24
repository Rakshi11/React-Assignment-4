
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import '../App.css';  // Import CSS file

const ProductListComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="ProductListComponent">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListComponent;