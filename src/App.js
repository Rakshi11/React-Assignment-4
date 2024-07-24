
import React from 'react';
import ProductListComponent from './components/ProductListComponent';
import Cart from './components/Cart';

const App = () => (
  <div className="App">
    <h1>Shopping Cart</h1>
    <ProductListComponent />
    <Cart />
  </div>
);

export default App;