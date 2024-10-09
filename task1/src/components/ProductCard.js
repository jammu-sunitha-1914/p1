// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {isInCart ? (
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            ) : (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
        </div>
    );
};

export default ProductCard;
