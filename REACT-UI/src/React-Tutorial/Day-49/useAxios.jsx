import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const LoadingData = async () => {
        try {
            const response = await axios.get(url);
            if (response.data) {
                setData(response.data);
                console.log(response.data);
                setLoading(false)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        LoadingData();
    }, [url])

    return { data, loading }
}

export default useAxios