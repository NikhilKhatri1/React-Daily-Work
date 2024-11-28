import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/AppContext'

const Footer = () => {
  const { person } = useContext(UserContext)
  const [name, setName] = useState(person)
  return (
    <div>
      <h1>Footer</h1>
      <h5>{person}</h5>
      <h5>{name}</h5>
      <button onClick={() => setName("Love & Peace")} className='btn btn-danger'>change Name</button>
    </div>
  )
}

export default Footer