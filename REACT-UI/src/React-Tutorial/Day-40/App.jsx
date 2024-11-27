import React from 'react'
import ReduxToolkit from './ReduxToolkit'
import { store } from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <ReduxToolkit />
      </Provider>
    </div>
  )
}

export default App