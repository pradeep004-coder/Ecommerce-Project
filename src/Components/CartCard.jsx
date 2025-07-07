import { useNavigate } from 'react-router-dom';

function CartCard({productObj, index, quantity, handleIncreaseQty, handleDecreaseQty, handleRemove}) {
   const navigate =useNavigate();
  return (
    <div className='container mb-2'>
        <div className='card' onClick={() => navigate(`/product/${productObj.index}`)}>
            <div className='d-flex flex-row' style={{height : "300px"}}>
                <div className='h-100 w-75 bg-secondary d-flex justify-content-center align-items-center'>
                    <span className='text-white fw-bold fs-2' style={{transform : 'rotate(-30deg)'}}>Image</span>
                </div>
                <div className='card-body d-flex flex-column justify-content-center align-items-between' >
                    <div className='card-title'>
                        <h2>{productObj.name}</h2>
                    </div>
                    <div className='fs-4'>₹ {productObj.price.toLocaleString('en-IN')}</div>
                    <div className='fs-4'>{productObj.rating}</div>
                    <div>
                    <div className="w-50 fs-4 text-justify" onClick={(e) => e.stopPropagation()}>
                        Qty : {quantity}
                    </div>

                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary bg-transparent" onClick={(e) => handleDecreaseQty(e,index)}>-</button>
                            <button type="button" className="btn btn-outline-secondary bg-transparent" onClick={(e) => (handleIncreaseQty(e,index))}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-footer  d-flex align-items-cener justify-content-center'>
                <button type='button' className='btn btn-outline-secondary bg-transparent mx-4' onClick={(e)=>(handleRemove(e,index))}>Remove</button>
            </div>
        </div>
    </div>
  );
}

export default CartCard;