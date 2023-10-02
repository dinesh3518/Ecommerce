import React from 'react';

export default function Cart({ cartItems,setCartItems }) {
let total=0
cartItems.forEach(element => {
  total+=element.price
});

  return (
    <div className='card p-3'>
      <div className='d-flex align-items-center flex-column'>
      <h2 className='p-3'>Cart</h2>
      <div>
      {cartItems.map((item) => (
          <div className='row'>
            <h5 className='col'>{item.name}</h5>
            <h5 className='col-5'>${item.price}</h5>
            <button className='m-1 btn btn-danger'
              onClick={()=>setCartItems(cartItems.filter((selected) => selected.id !== item.id))}>Delete</button>
          </div>
        ))}
        <hr/>
        <div className='row'>
        <h3 className='col'>Total Amount = $</h3>
        <h3 className='col-6'>{total.toFixed(2)}</h3>
        </div>
      
      </div>
        
      <button className='btn btn-success m-4'>Place order</button>
    </div>
    </div>
  );
}

