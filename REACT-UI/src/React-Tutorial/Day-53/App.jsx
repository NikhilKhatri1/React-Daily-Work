import React from 'react'
import Provider from './Provider'
import Parent from './Parent'

const App = () => {
    return (
        <div className='p-2'>
            <Provider>
                <Parent />
            </Provider>
        </div>
    )
}

export default App