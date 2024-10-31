import React from 'react'
import { store } from './store/store'
import { Provider } from 'react-redux'
import ReduxToolkit from './ReduxToolkit'
const App = () => {
    return (
        <Provider store={store}>
            <ReduxToolkit />
        </Provider>
    )
}

export default App;