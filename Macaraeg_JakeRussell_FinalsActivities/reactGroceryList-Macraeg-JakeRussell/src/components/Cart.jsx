import React from 'react';

const Cart = ({ cart, totalPrice }) => {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <hr/><br/>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <span>
              {item.quantity} {item.name} - ${item.price * item.quantity}
            </span>
          </div>
        ))
      )}
      <br/><hr/>
      <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      <br/>
    </div>
  );
};

export default Cart;
