import React,{useState} from 'react';
//import './App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Cart from './components/Cart'
function App() {
  const [count,setCount]=useState(0)   
  const [cartItems, setCartItems] = useState([]);
  const [visible, setVisible]=useState(true)

  const addToCart = (product) => {
    setCount(count+1)
    setCartItems([...cartItems, product]);
  }
  return (
    <div className='container-fluid'>
      <Header count={count} setVisible={setVisible}/>
      <main className="pt-2 border border-dark">
      {visible?<ProductList addToCart={addToCart}/> : <Cart cartItems={cartItems}/>}
      </main>
    </div>
  );
}

export default App;
