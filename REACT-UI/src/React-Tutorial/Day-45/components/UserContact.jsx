import React, { useContext } from 'react'
import { UserContext } from '../Context/AppContext.jsx'

const UserContact = () => {
    const { person, setPerson } = useContext(UserContext)
    return (
        <div>
            <h1>UserContact</h1>
            <h5>{person}</h5>
            <button className='btn btn-warning' onClick={() => setPerson("James")}>change person</button>
        </div>
    )
}

export default UserContact