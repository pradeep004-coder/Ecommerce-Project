import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
        <a className="navbar-brand fw-bold fs-4" href="#">MyShop</a>

        <div className="d-flex ms-auto align-items-center">
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search products" 
            aria-label="Search" 
            style={{ maxWidth: "200px" }}
          />
          <button className="btn btn-outline-dark me-2">Search</button>

          <a href="#" className="btn btn-outline-primary me-2">Login</a>

          <a href="#" className="btn btn-outline-secondary">
            🛒 Cart
          </a>
        </div>
      </nav>

      {/* Hero section */}
      <div className="container text-center d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
        <h1 className="display-4 mb-4">Welcome to MyShop</h1>
        <p className="lead mb-5">Find the best products at unbeatable prices!</p>
        <a href="/products" className="btn btn-dark btn-lg">Shop Now</a>
      </div>
    </>
  );
}

export default HomePage;
