import React from 'react';

function ProductCard({productObj, index, handleAddToCart}) {
  return (
    <div className="col-12 col-md-6 g-4 ">
        <div className="card">
            <div className="bg-secondary " style={{height : "100px"}}>
                <div className="text-white fw-bold text-center" style={{marginTop : "40px", transform : "rotate(-35deg)"}}>Image</div>
            </div>
            <div className="card-body bg-white" style={{}}>
                <div className={`card-title`}>
                    <h4 className='text-center' style={{display : "-webkit-box", WebkitLineClamp : 2, WebkitBoxOrient : "vertical", overflow : "hidden"}}>{productObj.name}</h4>
                </div>
                <div className=" mt-2 d-flex justify-content-center">
                    <div style={{ fontSize : "18px"}}>
                        Rs. {productObj.price.toLocaleString('en-IN')}
                    </div>
                </div>
                <div className=" mt-2 d-flex justify-content-center">
                    <div style={{ fontSize : "18px"}}>
                        {productObj.rating}
                    </div>
                </div>
                <div className=" mt-2 d-flex justify-content-center">
                    <button className={`btn btn-primary`} style={{ fontSize : "12px"}} onClick={(evt) => handleAddToCart(evt,index)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProductCard;