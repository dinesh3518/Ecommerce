import React from 'react';

export default function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ol>
    </div>
  );
}

