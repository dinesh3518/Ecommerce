export default function product({product}){

    return(
        <div key={product.id} className={classname}
          style={{width:'80px',height:'400px'}}>
          <div className="card">
            <img
              src={require(`../assets/images/${product.image}`)}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h6 className="card-title">{product.name}</h6>
              <h4 className="card-text">Price: ${product.price}</h4>
              <details>
                <summary>product description</summary>
                <p className="card-text">{product.description}</p>
              </details>
              <button className="btn btn-primary" onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
    );

}