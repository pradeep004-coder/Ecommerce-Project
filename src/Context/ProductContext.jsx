

import React, { createContext, useState, useEffect } from "react";

// Create Context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);         // all products
  const [filteredItems, setFilteredItems] = useState(productData);     // visible products
  const [ cartItems, setCartItems ] = useState([[5,1],[9,2],[85,2],[72,1]]);
  // Load products (from API or local JSON)
  useEffect(() => {
    fetch("productData.json")   // change path if needed
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setFilteredItems(data);    // default view
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <ProductContext.Provider value={{ productData, filteredItems, setFilteredItems, cartItems, setCartItems }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
