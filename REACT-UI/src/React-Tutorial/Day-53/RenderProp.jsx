import React from 'react'

const MyComponent = ({ renderProp }) => {

  return (
    <div>
      <h1>My Component</h1>
      {renderProp()}
    </div>
  )
}

const App = () => {

  return (
    <div>
      <h1>This is Parent Component</h1>
      <MyComponent
        renderProp={() => <p>This is Render Prop!</p>}
      />
    </div>
  )
}

export default App