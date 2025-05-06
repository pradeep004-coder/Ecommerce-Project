import React from 'react';

function Navbar( {handleSearchQuery, handleSearch, handleCartClick }) {
  return (
    <nav className='col-12 p-3 bg-light d-flex'>
        <div className='mx-3'>
            <h2>E-comm</h2>
        </div>
        <div className="mx-3 form-inline d-flex align-items-center">
            <input className="form-control form-control-sm  me-2" type="search" onInput={handleSearchQuery} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-sm btn-outline-success" type="button" onClick={handleSearch}>Search</button>
        </div>
        <div className='ms-auto me-3 my-auto'>
            <img src='Images/cart-icon.png' alt='cart-icon' style={{height : "40px"}} onClick={handleCartClick}/>
        </div>
    </nav>
  );
}

export default Navbar;