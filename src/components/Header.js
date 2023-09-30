import cart from '../assets/images/cartsvg.svg'
import '../assets/cart.css'
export default function Header({count, setVisible}){
    
    return(
    <nav class="navbar bg-secondary sticky-top d-flex">
          <div class="navbar-header">
           <button className='btn btn-secondary' onClick={()=>setVisible(true)}><h1 class="navbar-brand text-white">E-commmerce</h1></button>
          </div>
          <button className='btn'  onClick={()=>setVisible(false)}>
          <div class="cart">
            <span class="count">{count}</span>
            <img src={cart} alt='cart'/>
          </div>
          </button>
          
    </nav>
    );
}