import React,{useEffect, useState} from 'react'
import CartCard from './CartCard'
import ConfirmBox from './ConfirmBox'
function Cart({cartItems, setCartItems, handleDenyCart}) {
    const [ productData, setData ] = useState([])// each element conatains 2 values : index of product data and quantity
    const [ showConfirmBox, setShowConfirmBox ] = useState(false)
    const [ cartTotal, setCartTotal ] = useState(0)
    const [delCart, setDelCart] = useState(null)

    useEffect(() => {
        fetch('/productData.json') 
        .then(response => response.json())
        .then((data) => {
            setData(data);
        })
    }, [productData]);
    useEffect(
        () => {
            if(productData.length) {
                let sum = 0;
                cartItems.forEach(item => {
                sum += productData[item[0]].price * item[1];
                });
                setCartTotal(sum)
            }
        },
    [cartItems, productData])
    
    const handleChangeQty = (evt,index) => { 
        let val = evt.target.value
        val = val === '' ? null : Number(val)
        let updatedItems = cartItems.map((item,i)=> {
            if(i===index) {
                return [item[0], val]
            }
            return item
        })

        setCartItems(updatedItems)
        val = val===null ? 0 : Number(val)

        setTimeout(() => {
            setCartItems(prevItems => prevItems.map(
                (item,i) => i===index ? [item[0],val] : item
            ))
        }, 2000);
       
    }
    const handleIncreaseQty = (index) => { 
        let updatedItems = cartItems
        if (true) {
            updatedItems[index][1]++
            setCartItems(updatedItems)
        }
     }
     const handleDecreaseQty = (index) => {
        let updatedItems = cartItems 
        if (cartItems[index][1] > 1) {
            updatedItems[index][1]--
            setCartItems(updatedItems)
        }
     }
    const handleRemove = (index) => { 
        setShowConfirmBox(true)
        setDelCart(index)
     }
    const onConfirm = () => { 
        setShowConfirmBox(false)
        setCartItems(cartItems.filter((item,i) => i !== delCart))
        setDelCart(null)
     }
     const onCancel = () => { 
        setShowConfirmBox(false)
     }

     if (!productData.length) {
        return <div>Loading...</div>;
    }
    if (!cartItems.length) {
        return(
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                <h1 className='text-center fw-bold text-muted'>Cart is Empty !!</h1>
            </div>
        )
    }
    return (
        <>
        <div className={`w-100 h-100 d-flex overflow-hidden position-absolute start-0 top-0 bg-dark bg-opacity-75 `}
        id='cartBox'>
            <button type='button' className="ms-auto border-0 bg-white p-2 align-self-start rounded-start" onClick={handleDenyCart}>{'>'}</button>
            <div className=" bg-white align-self-stretch" id='cartSection'>
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
                                        handleChangeQty={handleChangeQty}
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
                                <button  className="btn btn-primary m-2">Place Order</button>
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