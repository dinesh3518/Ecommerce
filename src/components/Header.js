import cart from '../assets/images/cartsvg.svg'
import '../assets/cart.css'
export default function Header({count, setVisible}){
    
    return(
    <nav class="navbar navbar-light sticky-top bg-secondary d-flex">
          <div class="navbar-header">
           <button className='btn btn-secondary ' onClick={()=>setVisible(true)}>
            <h1 class="navbar-brand text-white">E-commerce</h1>
           </button>
          </div>
          <button className='btn float-end'  onClick={()=>setVisible(false)}>
              <div class="cart">
              <span class="count">{count}</span>
              <img src={cart} alt='cart'/>
              </div>
          </button>
    </nav>
    );
}