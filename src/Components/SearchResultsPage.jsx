import { useState } from 'react';
import Navbar from './Navbar';
import SortFilterPanel from './SortFilterPanel';
import ProductList from './ProductList';

function SearchResultsPage() {

  const [showFilter, setShowFilter] = useState(false);
  const [openingFilter, setFilterOpening] = useState(false);

  const handleOpenFilter = () => {
    setShowFilter(true);
     setTimeout(() => {
      setFilterOpening(true);
    }, 100);
  }

  const handleDismissFilter = () => {
    setFilterOpening(false);
    setTimeout(() => {
      setShowFilter(false);
    }, 300);
  }
  
  return (
    <div className='row'>
      <div className='col-12 '>
        <Navbar/>
      </div>
      <div className='d-block d-md-none d-flex flex-column'>
        <button type='button' className='m-3 me-auto btn btn-outline-success' onClick={handleOpenFilter}>Sort/Filter</button>
        {
          showFilter && <div className='h-100 w-100 position-fixed top-0 start-0 z-3 bg-dark bg-opacity-50' onClick={handleDismissFilter}>
            <div className={`filter-in-out ${openingFilter?"mount-filter":"unmount-filter"} bg-white h-100 w-50 d-flex flex-column`} onClick={(e)=>e.stopPropagation()}>
              <button type='button' className='btn ms-auto fs-2' onClick={handleDismissFilter}>✕</button>
              <div className='fs-2 fw-bold text-center'>Sort & Filter</div>
              <hr/>
              <SortFilterPanel/>
            </div>
          </div>
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