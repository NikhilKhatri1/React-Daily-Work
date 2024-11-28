import React from 'react'

const Child = (props) => {
    const { name, phone } = props.value;
  return (
      <div>
          <h1>Child Component</h1>
          <h4>Hello!, {name}</h4>
          <h4>This is your phone number : {phone}</h4>
    </div>
  )
}

export default Child