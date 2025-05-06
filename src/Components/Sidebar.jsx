import React from "react";

function Sidebar({rangeVal, handlePriceRange, sortOption, handleSort, handleApply, handleReset}) {
    
  return (
    <aside className='col-2 ps-4 fs-4'>
    
        <div className="flex flex-col gap-4 mt-4 ml-4">
            
            <div className="mb-4">
                <h3 className="font-semibold">Price Range :</h3>
                <label htmlFor="rangeInput" className="form-label">Rs. 0 - {rangeVal===0 ? '∞' : rangeVal}</label>
            <input 
                type="range" 
                className="form-range" 
                id="rangeInput"
                value={rangeVal}
                min={10}
                max={100000}
                onChange={handlePriceRange}
            />
            </div>

            <div className="mb-3">
                <h3 className="font-semibold">Sort By :</h3>
                <div className="form-check">
                    <input 
                        type="radio"
                        name="sortOption"
                        value="priceLow"
                        id="sortPriceLow"
                        className="form-check-input"
                        checked={sortOption==='priceLow'}
                        onChange={handleSort}
                    /> 
                    <label htmlFor="sortPriceLow" className="ml-2 form-check-label"> Price : Low to High</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="sortOption" value="priceHigh" id="sortPriceHigh" className="form-check-input" checked={sortOption==='priceHigh'} onChange={handleSort}/> 
                    <label htmlFor="sortPriceHigh" className="ml-2 form-check-label"> Price : high to low</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="sortOption" value="rating" id="sortRating" className="form-check-input" checked={sortOption==='rating'} onChange={handleSort}/> 
                    <label htmlFor="sortRating" className="ml-2 form-check-label"> Rating</label>
                </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
                <button type="button" className="btn btn-dark" onClick={handleReset}>Reset</button>
                <button type="button" className="btn btn-white" onClick={handleApply}>Apply</button>
            </div>
        </div>
    
    </aside>
  );
}

export default Sidebar;