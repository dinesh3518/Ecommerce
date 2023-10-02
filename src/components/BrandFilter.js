import products from './Products'

function BrandFilter({selectedBrands, handleBrandChange }) {
   let brands={}
   products.forEach((product)=>{
    if(brands[product.brand]){
      brands[product.brand]++
    }
    else{
      brands[product.brand]=1
    }
  })

    const sortedBrands =Object.keys(brands).sort();
  return (
    <div className='card'  style={{backgroundColor:'#7ac32a'}}>
    <div className='card-body'>
      <h4 className='card-title'>Brands</h4><hr/>
      {sortedBrands.map((brand) => (
        <label key={brand} className="d-flex flex-row">
          <input
            type="checkbox"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={handleBrandChange}
            className="mr-1"
          />
          {brand}({brands[brand]})
          
        </label>
      ))}
    </div>
    </div>
  );
}

export default BrandFilter;
