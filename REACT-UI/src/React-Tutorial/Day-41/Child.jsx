import React from 'react'

const Child = (props) => {
  const { userName, phone } = props.value;
  return (
    <div>
      <h1>Child Component</h1>
      <h1>my Name is {userName}</h1>
      <h1>phone : {phone}</h1>
    </div>
  )
}

export default Child
