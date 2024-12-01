import React from 'react'
import useAxios from './useAxios'

const FetchData = () => {
    const { data, loading } = useAxios("https://fakestoreapi.com/products");

    return (
        <div>
            <h1>Custom Hook</h1>
            {
                loading
                    ? (<p>Loading....</p>)
                    : (data.map((item) => (<p key={item.id}>Product title: {item.title}</p>)))
            }
        </div>
    )
}

export default FetchData