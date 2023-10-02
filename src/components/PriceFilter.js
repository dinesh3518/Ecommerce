import React from 'react';

function PriceFilter({ sortByPrice, handleSortChange }) {
  return (
   <div className='card'  style={{backgroundColor:'#7ac32a'}}>
    <div className='card-body'>
      <h4 className='card-title'>Price</h4><hr/>
      <label className="d-block">
        <input
          type="radio"
          value="highToLow"
          checked={sortByPrice === 'highToLow'}
          onChange={handleSortChange}
          className="mr-1"
        />
        High to Low
      </label>
      <label className="d-block">
        <input
          type="radio"
          value="lowToHigh"
          checked={sortByPrice === 'lowToHigh'}
          onChange={handleSortChange}
          className="mr-1"
        />
        Low to High
      </label>
    </div>
   </div>
  );
}

export default PriceFilter;
