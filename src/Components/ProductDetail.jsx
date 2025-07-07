import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
import Navbar from './Navbar';

function ProductDetail() {
  const { productId } = useParams(); // assuming you're using index as ID
  const { productData, cartItems, setCartItems } = useContext(ProductContext);
    const navigate = useNavigate();

  const product = productData.find(item => item.index === parseInt(productId)); // match by index

   const handleAddToCart = (evt) => {
        let add = true;
        evt.target.classList.replace('btn-primary', 'btn-secondary');
        cartItems.map( item =>( // check the item is in cart or not
            add = item[0] === productData.indexOf(product) ? false : add
        ));
        if (add) {
            setCartItems([...cartItems, [productData.indexOf(product), 1]]);
        }
    }

    const handleBuyNow = (product) => {
        navigate("/order-confirmation", {
            state: {
            type: "single",
            product: { ...product, quantity: 1 },
            },
        });
    };

  if (!product) {
    return <div className="text-center my-5">Product not found.</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div>
        <div className="bg-secondary text-white fs-1 fw-bold d-flex align-items-center justify-content-center" style={{height : "200px"}}>
            <span style={{transform : "rotate(-35deg)"}}>Image</span>
        </div>
        <div >
          <h2>{product.name}</h2>
          <p className="text-muted">{product.brand}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p>{product.description}</p>
          <h4 className="text-success">₹{product.price}</h4>
          <button className="btn btn-primary me-2" onClick={handleAddToCart}>Add to Cart</button>
          <button className="btn btn-success" onClick={() => handleBuyNow(product)}>Buy Now</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetail;
