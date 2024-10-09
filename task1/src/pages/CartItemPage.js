// src/pages/CartPage.js
import React from 'react';

const CartItemPage = ({ cartItems }) => {
    return (
        <div>
            <h1>Cart Items</h1>
            {cartItems.length === 0 ? ( // Change to use length for array
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => ( // Directly map over cartItems
                        <li key={item.id}>
                            {item.name} - ${item.price} (Count: {item.count})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartItemPage;
