import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import ReduxToolkitApp from './ReduxToolkitApp'
const App = () => {
    return (
        <div className='m-2'>
            <Provider store={store}>
                <ReduxToolkitApp />
            </Provider>
        </div>
    )
}

export default App