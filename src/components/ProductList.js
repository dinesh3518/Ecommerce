import React, { useState } from 'react';
import products from './products';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';

function ProductList({addToCart}) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortByPrice, setSortByPrice] = useState('');
  const [layout, setLayout] =useState(3)
  const classname=`col-md-${layout} mb-4 d-flex align-items-end`
  const handleBrandChange = (e) => {
    const brand = e.target.value;
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((selected) => selected !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleSortChange = (e) => {
    setSortByPrice(e.target.value);
  };

  let filteredProducts = products;

  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedBrands.includes(product.brand)
    );
  }

  if (sortByPrice === 'highToLow') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortByPrice === 'lowToHigh') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }

  return (
    <>
     <div className='d-flex justify-content-end' style={{height:'35px'}} >
          <span className='btn'>Change Layout: </span>
          <span
            className="layout-button btn"
            style={{paddingRight:'8px',paddingLeft:'8px'}}
            onClick={()=>setLayout(4)}
          >
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
          </span>
          <span
            className="layout-button btn"
            onClick={()=>setLayout(3)}
          >
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
          </span>
        </div>
    <div className='d-flex justify-content-start'>
      <div className='' style={{width:"15rem"}}>
      <BrandFilter
        brands={[
            'VicTsing',
            'Bose',
            'Willful',
            'Ronyes',
            'Toshiba',
            'Tile',
            'Bugani',
            'Sony',
            '3M',
            'Oculus',
            'Hobo',
            'Adidas',
            'TAS',
            'OneOdio',
            'Sharp',
            'Philips',
            'Apple',
            'Nike',
            'Logitech',
            'Google',
          
        ]}
        selectedBrands={selectedBrands}
        handleBrandChange={handleBrandChange}
      />
      <PriceFilter sortByPrice={sortByPrice} handleSortChange={handleSortChange} />
      </div>
      <div className='row' style={{width:"80%"}}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={classname}
          style={{width:'20rem',height:'25rem'}}>
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
        ))}
      </div>
    
    </div>
    </>
    
  );
}

export default ProductList;
