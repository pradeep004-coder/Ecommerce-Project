import React from 'react'
import Navbar from './Navbar';
import SortFilterPanel from './SortFilterPanel';
import ProductList from './ProductList';

function SearchResultsPage() {
  return (
    <div className='row'>
        <Navbar/>
        <SortFilterPanel/>
        <ProductList/>
    </div>
  )
}

export default SearchResultsPage