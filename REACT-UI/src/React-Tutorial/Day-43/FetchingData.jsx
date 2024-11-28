import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchingData = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const FetchApi = async () => {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        if (response) {
            console.log(response.data)
            setCountries(response.data)
            setLoading(false)
        }
    }
    useEffect(() => {
        FetchApi()
    }, [])
    return (
        <div>
            <h1>FetchingData</h1>
            {
                loading
                    ? (<p>Loading ....</p>)
                    : (<ul>
                        {
                            countries.map((country) => (
                                <li key={country.name.common}>{country.name.common}</li>
                            ))
                        }
                    </ul>
                    )
            }
        </div>
    )
}

export default FetchingData