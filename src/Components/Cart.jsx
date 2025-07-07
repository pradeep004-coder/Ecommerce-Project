import {useContext, useEffect, useState} from 'react';
import { ProductContext } from '../Context/ProductContext';
import CartCard from './CartCard';
import ConfirmBox from './ConfirmBox';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {productData, cartItems, setCartItems} = useContext(ProductContext);
    const [ showConfirmBox, setShowConfirmBox ] = useState(false);
    const [ cartTotal, setCartTotal ] = useState(0);
    const [ delCart, setDelCart ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(productData.length) {
            let sum = 0;
            cartItems.forEach(item => {
            sum += productData[item[0]].price * item[1];
            });
            setCartTotal(sum);
        }
    },[cartItems, productData])

    const handleIncreaseQty = (evt, index) => { 
        evt.stopPropagation();
        const updatedItems = cartItems.map((item, i) => 
            i === index ? [item[0], item[1] + 1] : item
        );
        setCartItems(updatedItems);
    }

    const handleDecreaseQty = (evt, index) => {
        evt.stopPropagation();
        const updatedItems = cartItems.map((item, i) =>
            i === index && item[1] > 1 ? [item[0], item[1] - 1] : item
        );
        setCartItems(updatedItems);
    }

    const handleRemove = (evt,index) => { 
        evt.stopPropagation();
        setShowConfirmBox(true);
        setDelCart(index);
     }

    const onConfirm = () => { 
        setShowConfirmBox(false);
        setCartItems(cartItems.filter((item,i) => i !== delCart));
        setDelCart(null);
     }

     const onCancel = () => { 
        setShowConfirmBox(false)
     }

    const handlePlaceOrder = () => {
        const orderItems = cartItems.map(([productIndex, quantity]) => {
            const item = productData[productIndex];
            return { ...item, quantity };
        });

        navigate("/order-confirmation", {
            state: {
            type: "cart",
            items: orderItems,
            },
        });
    }

    if (!productData.length) {
        return <div>Loading...</div>
    }

    if (!cartItems.length) {
        return(
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                <h1 className='text-center fw-bold text-muted'>Cart is Empty !!</h1>
            </div>
        );
    }

    return (
        <>
            <div className={`w-100 h-100 d-flex overflow-hidden position-absolute start-0 top-0 z-3 bg-dark bg-opacity-75 `} id='cartBox' onClick={() =>navigate(-1)}>
                <button type='button' className="ms-auto border-0 bg-white p-2 align-self-start rounded-start">{'>'}</button>
                <div className=" bg-white align-self-stretch" id='cartSection' onClick={evt => evt.stopPropagation()}>
                        <div className="d-flex flex-column h-100">
                            <div id='cartItemList' className='mt-2 h-100 align-self-stretch'>
                                {cartItems.map ( (val, index) => { 
                                    const product = productData[val[0]];
                                    if (!product) return null; // safety

                                    return (
                                        <CartCard 
                                            key={val[0]}
                                            index={index}
                                            productObj={productData[val[0]]}
                                            quantity={val[1]}
                                            handleIncreaseQty={handleIncreaseQty}
                                            handleDecreaseQty={handleDecreaseQty}
                                            handleRemove={handleRemove}
                                        />
                                    )
                            })}
                            </div>
                            <div id='cartTotal' className='w-100 fw-bold align-self-end d-flex align-items-center justify-content-around '>
                                <div>Total : ₹ {cartTotal.toLocaleString('en-IN')}</div>
                                <div>
                                    <button  className="btn btn-primary m-2" onClick={handlePlaceOrder}>Place Order</button>
                                </div>
                            </div>
                            {showConfirmBox && <ConfirmBox onConfirm={onConfirm} onCancel={onCancel}/>}
                    </div>
            </div>
           </div>
        </>
    );  
}

export default Cart;