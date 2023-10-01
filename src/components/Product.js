import { useState } from "react";

export default function Product({product,addToCart,layout}){

  const classname=`col-md-${layout} mb-4 d-flex flex-wrap`
  const [isHover, setIsHover] = useState(false)
  const [dHover, setdHover] = useState(false)

    return(
      <div key={product.id} className={classname}
      >
      <div className="card" style={{width:'20rem',height:'30rem',backgroundColor:"#71d2aa"}}
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}>
        <img
          src={require(`../assets/images/${product.image}`)}
          className="card-img-top"
          alt={product.name}
          onMouseEnter={() => setdHover(true)}
          onMouseLeave={() => setdHover(false)}
        />
         <p  className=""
                style={{display: dHover?'':'none'}} 
            >{product.description}</p>
        <div className="card-body"  style={{display: dHover?'none':''}}>
          <h6 className="card-title text-primary">{product.name}</h6>
          <div className="d-flex justify-content-between">
          <p className='badge badge-light'>Rating: {product.rating}</p>
          {product.hasFreeShipping? <p className="text-dark">Free delivery</p>:''}
          </div>
          <h4 className="card-text text-center">Price: ${product.price}</h4>          
        </div>
        <button className="btn btn-warning m-2" onClick={()=>addToCart(product)}
           style={{display: isHover?'':'none'}}>Add to Cart</button>
      </div>
    </div>
    );

}
