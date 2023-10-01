import React from 'react';

export default function Cart({ cartItems }) {
let total=0
cartItems.forEach(element => {
  total+=element.price
});

  return (
    <div className='card p-3'>
      <div className='d-flex align-items-center flex-column'>
      <h2>Cart</h2>
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name} - ${item.price}</p>
          </li>
        ))}
      </ol>
      <h3>Total Amount = $ {total}</h3>
      <button className='btn btn-success'>Place order</button>
    </div>
    </div>
  );
}

