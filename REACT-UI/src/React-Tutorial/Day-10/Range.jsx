import { useState, useEffect } from "react";
import axios from "axios";

export function Ranging() {
    const [products, setProducts] = useState([]);
    const [range, setRange] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Function to fetch products from the API
    function LoadProduct() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error Fetching Products: ", error);
            });
    }

    // Handle range input changes
    function HandleRangeChange(e) {
        setRange(e.target.value);
    }

    // Filter products based on rating
    function FilterProduct() {
        if (range <= 1) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.rating.rate >= range);
            setFilteredProducts(filtered);
        }
    }

    // Load products when component mounts
    useEffect(() => {
        LoadProduct();
    }, []);

    // Filter products whenever the range or products change
    useEffect(() => {
        FilterProduct();
    }, [range, products]);

    return (
        <div className="container-fluid">
            <h1>Products Details</h1>
            <div className="row">
                <div className="col-5">
                    <h3>Range Method</h3>
                    <div className="d-flex">
                        <div className="me-1 fw-bold">1</div>
                        <div>
                            <input
                                type="range"
                                min={1}
                                max={5}
                                step="0.1"
                                value={range}
                                className="form-range w-100"
                                onChange={HandleRangeChange}
                            />
                        </div>
                        <div className="ms-1 fw-bold">5</div>
                    </div>
                </div>
                <div className="col-7">
                    <ul>
                        {
                            filteredProducts.map((product) => (
                                <li key={product.id}>
                                    <h5>Product Title: {product.title}</h5>
                                    <p>Product Price: ${product.price}</p>
                                    <p>Product Rating: {product.rating.rate}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
