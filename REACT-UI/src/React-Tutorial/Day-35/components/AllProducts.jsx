import React from 'react';
import { useGetAllProductsQuery } from '../service/dummyData';

const AllProducts = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    console.log(data)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching products: {error.message}</div>;
    }

    return (
        <div>
            <h1>All Products</h1>
            <ul>
                {data.products.map(product => (
                    <li key={product.id}>{product.title }</li>
                ))}
            </ul>
        </div>
    );
}

export default AllProducts;
