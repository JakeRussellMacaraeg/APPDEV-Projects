import React, { useState } from 'react';

const GroceryItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1); 
  };

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
    setQuantity(1); 
  };

  const getItemClass = (name) => {
    switch (name.toLowerCase()) {
      case 'grapes':
        return 'grapes';
      case 'oranges':
        return 'oranges';
      case 'kiwis':
        return 'kiwis';
      case 'bananas':
        return 'bananas';
      case 'cucumbers':
        return 'cucumbers';
      default:
        return '';
    }
  };

  return (
    <div className="grocery-item">
      <h3 className={getItemClass(item.name)}>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default GroceryItem;
