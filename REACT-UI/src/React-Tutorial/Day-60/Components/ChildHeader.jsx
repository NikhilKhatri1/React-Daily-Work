import React, { useContext } from 'react'
import { UserContext } from '../Context/AppContext'

const ChildHeader = () => {
    const { person, setPerson } = useContext(UserContext)
    return (
        <div>
            <h1>{person}</h1>
            <button className='btn btn-primary' onClick={() => setPerson('Alice')}>Change Name</button>
        </div>
    )
}

export default ChildHeader