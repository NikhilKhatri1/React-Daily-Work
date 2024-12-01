import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [data, setData] = useState("This is Context");
    const [fetchData, setFetchData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                if (response.data) {
                    setFetchData(response.data);
                    console.log(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <AppContext.Provider value={{ data, setData, fetchData, loading }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
