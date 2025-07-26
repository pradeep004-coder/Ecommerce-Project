import React, {useContext, useEffect, useState} from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const query = searchParam.get('query');
  const [searchTerm, setSearchTerm] = useState(query || '');
  const { productData, setFilteredItems } = useContext(ProductContext);

  useEffect( () => {
    if (query && productData.length) {
      const filtered = [...productData].filter(item => item.name.toLowerCase().includes(query)).sort((a, b) =>
          a.name.toLowerCase().indexOf(query) - b.name.toLowerCase().indexOf(query)
        );
        setFilteredItems(filtered);
    }
  }, [searchTerm, productData])

  const handleSearch = (evt) => {
    evt.preventDefault();
    const term = searchTerm ? searchTerm.toLowerCase().trim() : ''
    if(term) {
      const filtered = [...productData].filter(item => item.name.toLowerCase().includes(term)).sort((a, b) =>
          a.name.toLowerCase().indexOf(term) - b.name.toLowerCase().indexOf(term)
        );
    
      setFilteredItems(filtered);
      navigate(`/search?query=${encodeURIComponent(term)}`);
    }
  }

  return (
    <div className='mb-3' style={{height:'60px'}}>
      <nav className='w-100 p-3 bg-light d-flex position-fixed z-1 top-0' style={{height:'60px'}}>
          <div className='mx-3 my-auto'>
              <h2>E-comm</h2>
          </div>
          <form className="w-25 mx-3 form-inline d-flex align-items-center bg-white border border-secondary rounded-3" onSubmit={handleSearch}>
              <input className="w-100 fs-5 form-control form-control-sm outline-none" type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search . . ." aria-label="Search"/>
              <button className="btn ms-auto" type="submit">
                <img src='Images/search-icon.png' alt='search' style={{height : "16px"}} />
              </button>
          </form>
          <div className='ms-auto me-3 my-auto'>
              <Link to={'cart'}>
                <img src='Images/cart-icon.png' alt='cart' style={{height : "30px"}} />
              </Link>
          </div>
          <Outlet/>
      </nav>
    </div>
  );
}

export default Navbar;