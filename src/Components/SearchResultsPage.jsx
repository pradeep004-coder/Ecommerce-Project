import { useState } from 'react';
import Navbar from './Navbar';
import SortFilterPanel from './SortFilterPanel';
import ProductList from './ProductList';

function SearchResultsPage() {

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='row'>
      <div className='col-12 '>
        <Navbar/>
      </div>
      <div className='d-block d-md-none d-flex flex-column'>
        {
          showFilter ? <div className='h-100 w-100 position-fixed top-0 start-0 z-3 bg-dark bg-opacity-50' onClick={() => setShowFilter(false)}>
            <div className='bg-white h-100 w-50 d-flex flex-column' onClick={(e)=>e.stopPropagation()}>
              <button type='button' className='btn ms-auto fs-2' onClick={() => setShowFilter(prev => !prev)}>✕</button>
              <div className='fs-2 fw-bold text-center'>Sort & Filter</div>
              <hr/>
              <SortFilterPanel/>
            </div>
          </div>
          :<button type='button' className=' m-3 me-auto btn btn-outline-success' onClick={() => setShowFilter(true)}>Sort/Filter</button>
        }
      </div>
      <div className='col-2 col-md-3 col-lg-2 d-none d-md-block'>
        <SortFilterPanel/>
      </div>
      <div className='col'>
        <ProductList/>
      </div>
    </div>
  );
}

export default SearchResultsPage;