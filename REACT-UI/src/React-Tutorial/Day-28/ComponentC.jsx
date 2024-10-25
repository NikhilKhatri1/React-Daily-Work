import React, { useContext } from 'react'
import { userContext } from './App';
const ComponentC = () => {
    const { name, age } = useContext(userContext);
    // const User = useContext(userContext);

    return (
        <div>
            {/* using Destructuring method  */}
            <h1>Hi!, I'm {name} and my age is {age}</h1>
            {/* Both are same */}
            {/* <h1>Hi!, I'm {User.name} and my age is {User.age}</h1> */}
        </div>
    )
}

export default ComponentC