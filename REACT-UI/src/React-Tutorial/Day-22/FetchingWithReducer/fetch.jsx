import React, { useReducer, useEffect } from 'react';

import axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Fetch_success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'Fetch_error':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

function Fetch() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'Fetch_success', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'Fetch_error' })
            })
    }, [])


    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default Fetch

