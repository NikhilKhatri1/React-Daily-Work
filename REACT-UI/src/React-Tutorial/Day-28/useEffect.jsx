import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [data, setData] = useState([]); // Corrected state initialization

    const LoadData = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json()) // Correctly parsing the response
            .then((data) => {
                setData(data);
                console.log(data)
            }) // Setting the state with the fetched data
            .catch((error) => console.error('Error fetching data:', error)); // Adding error handling
    };

    useEffect(() => {
        LoadData();
    }, []);

    return (
        <div>
            <h1>useEffect</h1>
            <ul>
                {data.map((item, index) => <li key={index}>{index + 1}. Title : {item.title}</li>)}

            </ul>
        </div>
    );
};

export default UseEffect;
