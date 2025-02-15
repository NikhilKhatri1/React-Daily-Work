import React, { useState } from 'react'

const App = () => {
    const [data, setData] = useState();
    const response = axios.get("blob:https://megacloud.tv/06818188-3e4f-4a2d-aa3b-7ccbf8b07351")
    
  return (
    <div>App</div>
  )
}

export default App