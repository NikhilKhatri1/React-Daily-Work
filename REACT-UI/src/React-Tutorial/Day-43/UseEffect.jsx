import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            if (response) {
                console.log("Data is loaded")
                setProducts(response.data);
            }

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadProducts();
    },[])
    return (
        <div>
            <h1>UseEffect</h1>
            {/* <button onClick={loadProducts} className='btn btn-warning'>Load Products</button> */}
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseEffect