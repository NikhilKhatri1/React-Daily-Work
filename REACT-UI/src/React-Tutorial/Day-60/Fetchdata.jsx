import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Fetchdata = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
            setIsLoading(false);
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchData();
    },[isLoading])
    return (
        <div>
            <h1>Fetchdata</h1>
            <ul>
                {
                    (isLoading
                        ? <h1>Loading.....</h1>
                        : data.map((item) => (
                            <li key={item.id}>Title: {item.title}</li>
                        ))
                    )
                }
            </ul>
        </div>
    )
}

export default Fetchdata