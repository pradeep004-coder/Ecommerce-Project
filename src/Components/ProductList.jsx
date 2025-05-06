    import React from 'react';
    import ProductCard from './ProductCard';
    function ProductList({productData, handleAddToCart}) {
         
        if (productData.length <=0 ){
            return (
                <div className='col-10 d-flex justify-content-center align-items-center' style={{ height: "100vh" }}                    >
                    <div className='text-center'>No Product Found</div>
                </div>

            )
        }
        return (
            <main className='col-10 row' style={{height : "98vh", overflow : "scroll"}}>
                {productData.map(
                    (val, index)=>(
                            <ProductCard  key={index} index={index} productObj={val} handleAddToCart={handleAddToCart}/>
                    )     
                )}
            </main>
        );
    }

    export default ProductList;