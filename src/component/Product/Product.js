import React from 'react';
import './Products.css'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Rating:{ratings}</small> star</p>
            </div>
            <button className='btn-cart'><p>Add To Cart</p></button>
        </div>
    );
};

export default Product;