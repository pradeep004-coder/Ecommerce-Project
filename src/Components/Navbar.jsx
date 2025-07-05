import React, {useContext, useEffect, useState} from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParam = new URLSearchParams(location.search)
  const query = searchParam.get('query')
  const [searchTerm, setSearchTerm] = useState(query);
  const { productData, setFilteredItems } = useContext(ProductContext);

  useEffect( () => {
    if (query && productData.length) {
      const filtered = [...productData].filter(item => item.name.toLowerCase().includes(query)).sort((a, b) =>
          a.name.toLowerCase().indexOf(query) - b.name.toLowerCase().indexOf(query)
        );
        setFilteredItems(filtered)
    }
  }, [searchTerm, productData])

  const handleSearch = (evt) => {
    evt.preventDefault();
    const term = searchTerm ? searchTerm.toLowerCase().trim() : ''
    if(term) {
      const filtered = [...productData].filter(item => item.name.toLowerCase().includes(term)).sort((a, b) =>
          a.name.toLowerCase().indexOf(term) - b.name.toLowerCase().indexOf(term)
        );
    
      setFilteredItems(filtered)      
      navigate(`/search?query=${encodeURIComponent(term)}`);
    }
  };

  return (
    <nav className='col-12 p-3 bg-light d-flex'>
        <div className='mx-3'>
            <h2>E-comm</h2>
        </div>
        <form className="mx-3 form-inline d-flex align-items-center" onSubmit={handleSearch}>
            <input className="form-control form-control-sm  me-2" type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-sm btn-outline-success" type="submit">Search</button>
        </form>
        <div className='ms-auto me-3 my-auto'>
            <Link to={'cart'}>
              <img src='Images/cart-icon.png' alt='cart-icon' style={{height : "40px"}} />
            </Link>
        </div>
        <Outlet/>
    </nav>
  );
}

export default Navbar;