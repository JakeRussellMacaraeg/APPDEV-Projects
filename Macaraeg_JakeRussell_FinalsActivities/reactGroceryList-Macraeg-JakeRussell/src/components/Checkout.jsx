import React, { useState } from 'react';

const Checkout = ({ totalPrice, onCheckout }) => {
  const [amount, setAmount] = useState('');

  const handleCheckout = () => {
    const paidAmount = parseFloat(amount);
    if (paidAmount >= totalPrice) {
      onCheckout(paidAmount);
    } else {
      alert('Insufficient amount paid.');
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <label>
        Amount Paid:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button onClick={handleCheckout}>Confirm Payment</button>
    </div>
  );
};

export default Checkout;
