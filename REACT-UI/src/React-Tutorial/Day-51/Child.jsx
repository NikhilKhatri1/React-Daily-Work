import React, { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'

const Child = () => {
    const { data, setData, fetchData, loading } = useContext(AppContext);

    return (
        <div>
            <h1>Child</h1>
            <h3>{data}</h3>
            <div>
                {
                    loading
                        ? (<p>Loading...</p>)
                        : (fetchData.map(item => <p key={item.id}>{item.title}</p>))
                }
            </div>

        </div>
    )
}

export default Child