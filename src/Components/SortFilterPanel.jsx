import React, {useContext, useEffect, useState} from "react";
import { ProductContext } from "../Context/ProductContext";

function SortFilterPanel() {
    const [ selectedPriceLimit, setPriceLimit ] = useState(1000000);
    const [displayPriceValue, setDisplayPriceValue] = useState(0);
    const [sortOption, setSortOption] = useState("");
    const {filteredItems, setFilteredItems } = useContext(ProductContext);
    const [initialItems, setInitialItems] = useState([]);

    useEffect(() => {
        setInitialItems([...filteredItems])
    }, [])

    const handlePriceChange= (evt)=> {
        const value = Number(evt.target.value)
        setPriceLimit(value)
        setDisplayPriceValue(value)
    }

     const handleSort = (evt) => {
        setSortOption(evt.target.value.trim())
    }

    const handleApply = () => {
        let filtered = [...initialItems].filter(items => items.price <= selectedPriceLimit)
        if (sortOption === 'priceLow') {
            filtered.sort((a,b) => a.price - b.price)
        }     
        else if (sortOption === 'priceHigh') {
            filtered.sort((a,b) => b.price - a.price)
        } 
        else if (sortOption === 'rating'){
            filtered.sort((a,b) => b.rating - a.rating)
        }  
        
        setFilteredItems(filtered)        
    }

    const handleReset = () => {
        setPriceLimit(1000000)
        setDisplayPriceValue('∞')
        setSortOption('')
        setFilteredItems(initialItems)
    }

  return (
    <aside className='col-2 ps-4 fs-4'>
    
        <div className="flex flex-col gap-4 mt-4 ml-4">
            
            <div className="mb-4">
                <h3 className="font-semibold">Price Range :</h3>
                <label htmlFor="rangeInput" className="form-label">Rs. 0 - {displayPriceValue >= 100000 ? '∞' : displayPriceValue}</label>
            <input 
                type="range" 
                className="form-range" 
                id="rangeInput"
                value={selectedPriceLimit}
                min={10}
                max={100000}
                onChange={handlePriceChange}
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
                <button type="button" className="btn btn-white" onClick={handleApply} disabled={selectedPriceLimit === 1000000 && sortOption === ""}>Apply</button>
            </div>
        </div>
    
    </aside>
  );
}

export default SortFilterPanel;