import React, { useState } from 'react';
import Header from './components/Header';
import GroceryItem from './components/GroceryItems';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Receipt from './components/Reciept';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [paidAmount, setPaidAmount] = useState(0);

  const items = [
    { id: 1, name: 'Grapes', price: 2.5 },
    { id: 2, name: 'Oranges', price: 3 },
    { id: 3, name: 'Kiwis', price: 4 },
    { id: 4, name: 'Bananas', price: 1.5 },
    { id: 5, name: 'Cucumbers', price: 2 },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, item]);
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = (amountPaid) => {
    setPaidAmount(amountPaid);
    setIsCheckout(true);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="grocery-items">
          {items.map((item) => (
            <GroceryItem key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} totalPrice={totalPrice} />
        {!isCheckout && <Checkout totalPrice={totalPrice} onCheckout={handleCheckout} />}
        {isCheckout && <Receipt cart={cart} totalPrice={totalPrice} paidAmount={paidAmount} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
