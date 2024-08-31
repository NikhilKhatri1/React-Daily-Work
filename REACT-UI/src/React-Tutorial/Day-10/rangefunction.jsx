import React, { useState, useEffect } from "react";
import axios from "axios";

export function ProductList() {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [rating, setRating] = useState(1);

    // Fetch products when the component mounts
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data); // Save all products
                setFilterProducts(response.data); // Initially, show all products
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    // Update the filtered products whenever rating or products change
    useEffect(() => {
        if (rating <= 1) {
            setFilterProducts(products); // Show all products if rating is 1 or less
        } else {
            // Filter products by the selected rating
            const filtered = products.filter(product => product.rating.rate >= rating);
            setFilterProducts(filtered);
        }
    }, [products, rating]);

    // Update the rating when the slider changes
    const handleRatingChange = (event) => {
        setRating(Number(event.target.value));
    };

    return (
        <div className="container-fluid">
            <label htmlFor="ratingRange">
                Minimum Rating: {rating.toFixed(1)}
                <input
                    type="range"
                    id="ratingRange"
                    min="1"
                    max="5"
                    step="0.1"
                    value={rating}
                    onChange={handleRatingChange}
                />
            </label>
            <ul>
                {filterProducts.length > 0 ? (
                    filterProducts.map(product => (
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                        </li>
                    ))
                ) : (
                    <p>No products found with the selected rating.</p>
                )}
            </ul>
        </div>
    );
}
