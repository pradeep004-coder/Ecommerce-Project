import React from 'react';

function CartCard({productObj, index, quantity, handleChangeQty, handleIncreaseQty, handleDecreaseQty, handleRemove}) {
   
  return (
    <div className='container mb-2'>
        <div className='card'>
            <div className='d-flex flex-row' style={{height : "300px"}}>
                <div className='h-100 w-75 bg-secondary d-flex justify-content-center align-items-center'>
                    <span className='text-white fw-bold fs-2' style={{transform : 'rotate(-30deg)'}}>Image</span>
                </div>
                <div className='card-body d-flex flex-column justify-content-center align-items-between' >
                    <div className='card-title'>
                        <h2>{productObj.name}</h2>
                    </div>
                    <div>₹ {productObj.price.toLocaleString('en-IN')}</div>
                    <div className=''>{productObj.rating}</div>
                    <div>
                    <div className="form-group d-flex flex-row ">
                        <label htmlFor="inputQty" className="col-form-label">Qty :</label>
                        <div className="">
                        <input 
                            type="number" 
                            className="form-control text-center" 
                            id="inputQty" 
                            onChange={(e)=>handleChangeQty(e,index)} 
                            value={quantity} 
                            style={{
                                width: '75px',
                                MozAppearance: 'textfield',
                                WebkitAppearance: 'none',
                                margin: 0
                            }}
                        />
                        </div>
                    </div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary bg-transparent" onClick={() => handleDecreaseQty(index)}>-</button>
                            <button type="button" className="btn btn-outline-secondary bg-transparent" onClick={() => (handleIncreaseQty(index))}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-footer  d-flex align-items-cener justify-content-center'>
                <button type='button' className='btn btn-outline-secondary bg-transparent mx-4' onClick={()=>(handleRemove(index))}>Remove</button>
                <button type='button' className='btn btn-outline-secondary bg-transparent mx-4'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default CartCard;