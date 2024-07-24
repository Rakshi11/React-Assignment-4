import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import '../App.css';  // Import CSS file

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Amount: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;