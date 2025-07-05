import React, {useEffect, useState, useContext} from "react";
import { ProductContext } from "../Context/ProductContext";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const {productData, filteredItems, setFilteredItems, cartItems, setCartItems} = useContext(ProductContext)
  const [featuredItems, setFeaturedItems] = useState({});
  const [selectedCategory, setselectedCategory] = useState('');
  const navigate = useNavigate();

  useEffect( () => {
    const featured = [...productData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
    setFeaturedItems(featured);
  }, [productData])

  const handleCategoryClick = (category) => {
      setselectedCategory(category);      
      const categoryFiltered = productData.filter(item => item.category === category);
      setFilteredItems(categoryFiltered);      
      navigate(`/category/${encodeURIComponent(category.toLowerCase().trim())}`);      
      console.log("Items in this category:", category);
  };
  

  return (
    <div className="homepage overflow-auto" style={{height : '100vh'}}>
      <Navbar/>
      {/* Categories */}
      <section className="container my-5">
        <h2 className="mb-4 text-center">Categories</h2>
        <div className="row g-4 text-center">
          {[...new Set(productData.map(item => item.category))].map((cat, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              <div className="card h-100 shadow-sm p-3" onClick={() => handleCategoryClick(cat)}>
                <div className="fw-bold">{cat}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container my-5">
        <h2 className="mb-4 text-center">Featured Products</h2>
        <div className="row g-4">
          { featuredItems.length > 0 ?
            featuredItems.map((item, i) => (
              <div className="col-12 col-sm-6 col-md-4" key={i}>
                <div 
                  className="card h-100 shadow-sm border-0 hover-shadow transition" 
                  onClick={() => navigate(`/product/${item.index}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Image Section */}
                   <div className="bg-secondary text-white fs-1 fw-bold d-flex align-items-center justify-content-center" style={{height : "200px"}}>
                      <span style={{transform : "rotate(-35deg)"}}>Image</span>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{item.name}</h5>
                    <p className="text-muted mb-1">{item.brand}</p>
                    <p className="fw-bold text-success">₹ {item.price.toLocaleString('en-IN')}</p>

                    {/* Rating */}
                    <div className="text-warning mb-2">
                      <span className="text-muted ms-2">⭐ {item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

          ))
          : <p>No Featured Products</p>
          }
        </div>
      </section>
    </div>
  );
}

export default HomePage;
