import React from 'react'
import { useName, NameProvider } from './NameContext'

const DisplayName = () => {
    const name = useName();
    return < div > Name : {name} </div >;
}
export default function App() {

    return (
        <NameProvider>
            <div>
                <h1>Display Name Using useContext</h1>
                <DisplayName />
            </div>
        </NameProvider>
    )
}
