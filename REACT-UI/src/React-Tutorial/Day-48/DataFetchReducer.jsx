import React, { useReducer, useEffect } from 'react';
import axios from 'axios'; // Import axios

// 1. Define the initial state
const initialState = {
    data: null,
    loading: true,
    error: null,
};

// 2. Define the reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

// 3. Define the component
const DataFetcher = () => {
    // 4. Set up the useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    // 5. Handle side effects with useEffect (fetch data)
    useEffect(() => {
        const fetchData = async () => {
            // Dispatch FETCH_START to set loading state to true
            dispatch({ type: 'FETCH_START' });

            try {
                // Use axios to fetch data from the API (replace with your API URL)
                const response = await axios.get('https://fakestoreapi.com/products');

                // Dispatch FETCH_SUCCESS with the fetched data
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            } catch (error) {
                // Dispatch FETCH_ERROR with the error message
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };

        fetchData();
    }, []); // Empty dependency array means the effect runs only once, after the first render

    // 6. Render the component based on state
    return (
        <div>
            {state.loading && <p>Loading...</p>}
            {state.error && <p>Error: {state.error}</p>}
            {state.data && (
                <div>
                    <h3>Data fetched successfully!</h3>
                    {/* <pre>{JSON.stringify(state.data, null, 2)}</pre> */}
                    <ul>
                        {
                            state.data.map((data) => (
                                <li key={data.id}>{data.title}</li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DataFetcher;
