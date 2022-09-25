import React from 'react';

const Cart = ({ Cart }) => {
    return (
        <div>
            <h1>Order summery</h1>
            <p>
                select items:{Cart.length}
            </p>
        </div>
    );
};

export default Cart;