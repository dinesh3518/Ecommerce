import React, { useState } from 'react';
import products from './Products';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import Product from './Product';

function ProductList({addToCart}) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortByPrice, setSortByPrice] = useState('');
  const [layout, setLayout] =useState(3)
  

  const handleBrandChange = (e) => {
    const brand = e.target.value
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((selected) => selected !== brand))
    } else {
      setSelectedBrands([...selectedBrands, brand])
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
     <div className='d-flex container-fluid justify-content-md-center' style={{height:'2rem',backgroundColor:'#8ac649'}} >
          <span className='pt-1 pr-1'>Change Layout: </span>
          <span
            className="btn badge-success"
            onClick={()=>setLayout(4)}
          >
            <i className="fas fa-square p-1"></i>
            <i className="fas fa-square p-1"></i>
            <i className="fas fa-square p-1"></i>
          </span>
          <span
            className="btn badge-success"
            onClick={()=>setLayout(3)}
          >
            <i className="fas fa-square p-1"></i>
            <i className="fas fa-square p-1"></i>
            <i className="fas fa-square p-1"></i>
            <i className="fas fa-square p-1"></i>
          </span>
        </div>
    <div className='d-flex'  style={{backgroundColor:'#7ac32a'}}>
      <div className=''>
      <BrandFilter
        selectedBrands={selectedBrands}
        handleBrandChange={handleBrandChange}
      />
      <PriceFilter sortByPrice={sortByPrice} handleSortChange={handleSortChange} />
      </div>
      <div className='container'>
      <div className='row d-flex flex-wrap'>
        {filteredProducts.map((product) => {
          return <Product product={product} addToCart={addToCart} layout={layout}/>
        })}
      </div>
      </div>   
    </div>
    </>
    
  );
}

export default ProductList;
