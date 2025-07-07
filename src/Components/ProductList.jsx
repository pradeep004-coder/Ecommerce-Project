    import { useContext } from 'react';
    import { ProductContext } from '../Context/ProductContext';
    import ProductCard from './ProductCard';

    function ProductList() {
        const {productData, filteredItems, cartItems, setCartItems} = useContext(ProductContext);

        const handleAddToCart = (evt,index) => {
            let add = true;
            evt.stopPropagation();
            evt.target.className = 'btn btn-secondary';
            cartItems.map( (val) =>( // check the item is in cart or not
                add = val[0] === productData.indexOf(filteredItems[index]) ? false : add
            ));
            if (add) {
                setCartItems([...cartItems, [productData.indexOf(filteredItems[index]), 1]]);
            }
        }

        if (!productData.length || !filteredItems.length ){
            return (
                <div className='col-10 d-flex justify-content-center align-items-center' style={{ height: "100vh" }}                    >
                    <div className='text-center'>No Product Found</div>
                </div>
            );
        }
        return (
            <div className='row' style={{height : "98vh", overflow : "scroll"}}>
                {filteredItems.map(
                    (val, index)=>(
                        <div  key={index} className="col-12 col-md-6 mb-4">
                            <ProductCard index={index} productObj={val} handleAddToCart={handleAddToCart}/>
                        </div>
                    )     
                )}
            </div>
        );
    }

    export default ProductList;