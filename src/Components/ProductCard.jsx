import { useNavigate } from "react-router-dom";

function ProductCard({productObj, index, handleAddToCart}) {
    const navigate = useNavigate();

  return (
    <div className="product-card card mb-3" onClick={() => navigate(`/product/${productObj.index}`)}>
            <div className="bg-secondary text-white fs-1 fw-bold d-flex align-items-center justify-content-center" style={{height : "200px"}}>
            <span style={{transform : "rotate(-35deg)"}}>Image</span>
        </div>
        <div className="card-body bg-white">
            <div className={`card-title`}>
                <h4 className='text-center fs-2' style={{display : "-webkit-box", WebkitLineClamp : 2, WebkitBoxOrient : "vertical", overflow : "hidden"}}>{productObj.name}</h4>
            </div>
            <div className=" mt-2 d-flex justify-content-center">
                <div className="fs-3 text-success">
                    ₹{productObj.price.toLocaleString('en-IN')}
                </div>
            </div>
            <div className=" mt-2 d-flex justify-content-center">
                <div style={{ fontSize : "18px"}}>
                    ⭐ {productObj.rating}
                </div>
            </div>
            <div className=" mt-2 d-flex justify-content-center">
                <button className={`btn btn-primary`} style={{ fontSize : "12px"}} onClick={(evt) => handleAddToCart(evt,index)}>
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
  );
}

export default ProductCard;