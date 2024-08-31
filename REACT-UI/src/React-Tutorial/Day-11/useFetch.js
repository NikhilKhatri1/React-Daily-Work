import { useState, useEffect } from "react";
import axios from "axios";


export function useFetch() {
    const [products, setProducts] = useState([]);

    function LoadProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(errors => {
                console.error("Fetching Errors: ", errors);
            })
    }
    useEffect(() => {
        LoadProducts()
    }, []);

    return {
        products,
        LoadProducts
    };
}