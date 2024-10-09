// src/pages/ProductPage.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './ProductPage.css'; // New CSS file

const ProductPage = ({ addToCart, removeFromCart, cartItems }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
        // Add more products here
    ];

    // Filter products based on search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Search bar */}
            <input
                type="text"
                placeholder="Search for a product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: '10px', margin: '20px 0', width: '100%' }}
            />

            {/* Display filtered products */}
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            isInCart={cartItems.some(item => item.id === product.id)}
                        />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
