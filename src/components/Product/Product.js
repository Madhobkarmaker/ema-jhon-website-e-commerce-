import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt=""/>
            </div>
            <div>
            <h3 className="product-name">{props.product.name}</h3>
            <br/>
            <p>By: {props.product.seller}</p>
            <br/>
            <p>price: ${props.product.price}</p>
            <p>only {props.product.stock} left in stock - order soon </p>
            <button className="btn"
            onClick = {() => props.addCartEvent(props.product)}
            ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
        
    );
};

export default Product;