import React from 'react'

const Child = (props) => {
    const { name } = props;
    return (
        <div className='p-2 border-red-500 border-1'>
            <h1>Child Component</h1>
            <h2>{name}</h2>

        </div>
    )

}
Child.defaultProps = {
    name: "Guest",
}

export default Child