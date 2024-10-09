import React from 'react';
import './CartItem.css'; // Import the CSS


const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
        </div>
    );
};

export default CartItem;
