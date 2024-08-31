import { useState, useEffect } from "react";
import axios from "axios";


export function useFetch() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch products from the API
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(errors => {
                console.error("Fetching Errors: ", errors);
                setError(errors);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { products, loading, error };
}
