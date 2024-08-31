import React from "react";
import { useFetch } from "./useFetch";

export function FetchinApi() {
    const { products, loading, error } = useFetch();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div className="p-4 m-4 container-fluid">
            <h1>Fetching Title</h1>
            {products.length > 0 ? (
                products.map((product) => (
                    <h3 key={product.id}>Title: {product.title}</h3>
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
}
