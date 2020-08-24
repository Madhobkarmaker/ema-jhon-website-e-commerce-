import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart
    // const totalPrice = cart.reduce((total,product) => total + product.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = Math.round(total + element.price);
        
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if( total > 0){
        shipping = 12.99;
    }
    const tax = Math.round(total / 10);
    const totalPrice = Math.round(total + shipping + tax);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length} </p>
            <p>Product Price: {total}</p>
            <p>shipping Cost: {shipping}</p>
            <p>Tax : {tax}</p>
            <p>Total price : {totalPrice}</p>
        </div>
    );
};

export default Cart;