import React, { useContext } from 'react'
import { UserContext } from '../Context/AppContext'

const Footer = () => {
  const { person } = useContext(UserContext)
  return (
    <div>
      <h1>Footer</h1>
      <h5>{person}</h5>
    </div>
  )
}

export default Footer