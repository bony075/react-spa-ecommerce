import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Product = ({ handelAddToCart, product }) => {
    // const { handelAddToCart,product } = props;
    const { name, img, seller, price, ratings } = product;
    // console.log(props.product);

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Rating:{ratings}</small> star</p>
            </div>
            <button onClick={() => handelAddToCart(product)} className='btn-cart '><p className='cart-text'>Add To Cart</p>
                <FontAwesomeIcon
                    icon={faCartPlus}
                ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;