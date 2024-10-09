// src/App.js
import React, { useState } from 'react';
import ProductPage from './pages/ProductPage';
import CartItemPage from './pages/CartItemPage';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // Update the count of existing item
                return prevItems.map(item => 
                    item.id === product.id 
                        ? { ...item, count: item.count + 1 } 
                        : item
                );
            }
            // Add new item to cart
            return [...prevItems, { ...product, count: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => 
            prevItems.filter(item => item.id !== id)
        );
    };

    return (
        <div>
            <h1>My Store</h1>
            <ProductPage 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
                cartItems={cartItems} 
            />
            <CartItemPage cartItems={cartItems} />
        </div>
    );
};

export default App;
