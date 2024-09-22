import React, { useState, useEffect } from 'react'

import axios from 'axios';

function Fetching() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false);
                setPost(response.data);
                setError('')
            })
            .catch(error => {
                setLoading(false);
                setPost({});
                setError('Something Went Wrong');
            })


    }, [])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default Fetching