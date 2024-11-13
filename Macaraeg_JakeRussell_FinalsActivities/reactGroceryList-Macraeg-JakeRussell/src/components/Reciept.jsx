import React from 'react';

const Receipt = ({ cart, totalPrice, paidAmount }) => {
  const change = paidAmount - totalPrice;

  return (
    <div className="receipt">
      <h3>Receipt</h3>
      <hr/><br/>
      {cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.quantity} {item.name} - ${item.price * item.quantity}
          </span>
        </div>
      ))}
      <br/  ><hr/>
      <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      <br/>
      <h4>Paid Amount: ${paidAmount.toFixed(2)}</h4>
      <br/>
      <h4>Change: ${change >= 0 ? change.toFixed(2) : "Insufficient amount!"}</h4>
      <br/>
    </div>
  );
};

export default Receipt;
