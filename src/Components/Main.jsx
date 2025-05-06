import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Spinner from "./Spinner";
import ProductList from './ProductList';
import Cart from './Cart';
function Main() {
    const [ productData, setData ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ filteredItems, setFilteredItems ] = useState([]);
    const [ searchTerm, setSearchTerm] = useState('');
    const [ priceLimit, setPriceLimit ] = useState(10000);
    const [rangeVal, setRangeval] = useState(0);
    const [sortOption, setSortOption] = useState("");
    const [ cartItems, setCartItems ] = useState([[5,1],[9,2],[85,2],[72,1]]);
    const [showCart, setShowCart] = useState(false);
    useEffect(() => {
            fetch('/productData.json') 
            .then(response => response.json())
            .then((data) => {
                setData(data);
                setFilteredItems(data);
                setLoading(false);
            })
    }, []);
    const handleSearchQuery = (evt) => {
        setSearchTerm(evt.target.value.toLowerCase().trim())
    }
    
    const handleSearch = () => {
        const filtered = productData
        .filter(item => item.name.toLowerCase().includes(searchTerm))
        .sort((a, b) =>
          a.name.toLowerCase().indexOf(searchTerm) - b.name.toLowerCase().indexOf(searchTerm)
        );
    
      setFilteredItems(filtered)
    }    

    const handlePriceRange= (evt)=> {
        setPriceLimit(evt.target.value)
        setRangeval(priceLimit)
    }

    const handleSort = (evt) => {
        setSortOption(evt.target.value.trim())
    }

    const handleApply = () => {
        let filtered = [...filteredItems].filter(items => items.price <= priceLimit)
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
        setRangeval('∞')
        setSortOption('')
        setFilteredItems(productData)
    }
    const handleAddToCart = (evt,index) => {
        let add = true
        evt.target.className = 'btn btn-secondary';
        cartItems.map( (val) =>(
            add = val[0] === productData.indexOf(filteredItems[index]) ? false : add
        ))
        if (add) {
            setCartItems([...cartItems, [productData.indexOf(filteredItems[index]), 1]])
        }
    }
    
    const handleCartClick = () => {
      setShowCart(true)
    }
    
    const handleDenyCart = () => {
      setShowCart(false)
    }
    
        
  return (
    <>
        <div className={`h-100 row overflow-hidden ${showCart && 'position-fixed'}`}>
        <Navbar
            handleSearchQuery={handleSearchQuery}
            handleSearch={handleSearch}
            handleCartClick={handleCartClick}
        />
        <Sidebar 
            rangeVal={rangeVal}
            handlePriceRange={handlePriceRange}
            sortOption={sortOption}
            handleSort={handleSort}
            handleReset={handleReset}
            handleApply={handleApply}
        />
       {loading ? <Spinner/> : <ProductList productData={filteredItems} handleAddToCart={handleAddToCart}/>}
        </div>
        
        {showCart && <Cart  cartItems={cartItems} setCartItems={setCartItems } handleDenyCart={handleDenyCart}/>}
    </>
  );
}

export default Main;