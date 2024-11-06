import React, { useState } from "react";
import Login from "./Login";

export default function Shop(props) {
  const ShopItems = props.items; // array of objects being passed to ShopItems
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  function addItem(item) {
    setCart((c) => [...c, item]);
  }

  // Function to render the list of items available in the shop
  const renderItems = () => {
    return ShopItems.map((item) => (
      <li key={item.id}>
        {item.name}
        <p>Price per piece: {item.price}</p>
        <button onClick={() => addItem(item)}>Add to Cart!</button>
      </li>
    ));
  };

  // Function to render the items in the cart
  const renderCart = () => {
    return cart.map((item, index) => (
      <li key={index}>
        {item.name} <br />
        Price per piece: {item.price}
        <br />
      </li>
    ));
  };

  // If not logged in, show the Login component
  if (props.isLoggedIn === false) {
    return <Login />;
  }
else{
  return (
    <>
      <h4>This is the shop: </h4>
      <ul>{renderItems()}</ul>

      <h4>Cart Items: </h4>
      {cart.length > 0 ? (
        <ul>{renderCart()}</ul>
      ) : (
        <p>There are no items in the cart!</p>
      )}
    </>
  );
}
}