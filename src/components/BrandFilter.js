import React from 'react';

function BrandFilter({ brands, selectedBrands, handleBrandChange }) {

    const sortedBrands = brands.sort();
  return (
    <div className='card'>
    <div className='card-body'>
      <h4 className='card-title'>Brands</h4>
      {sortedBrands.map((brand) => (
        <label key={brand} className="d-flex flex-row">
          <input
            type="checkbox"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={handleBrandChange}
            className="mr-1"
          />
          {brand}
        </label>

      ))}
    </div>
    </div>
  );
}

export default BrandFilter;
