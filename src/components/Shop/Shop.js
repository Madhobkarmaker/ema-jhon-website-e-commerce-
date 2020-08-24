import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts] = useState(fakeData.slice(0,10))
    const [cart,setCart] = useState([])
    const addCartEvent = (product) =>{
        console.log("product added",product)
        const newCart = [...cart,product] 
        setCart(newCart)
    }
   
    return (
        <div className="shop-container">
            <div className="product-container">
            
            {
                products.map(product => <Product
                    addCartEvent = {addCartEvent}
                     product={product}></Product>)
            }
            
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;