import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: 'Alice', age: 28 },
        { id: 2, name: 'John', age: 30 },
        { id: 3, name: 'Bob', age: 22 }
    ]
    return (
        <div>
            <h1>Iterate UserList</h1>
            <ul>
                {
                    users.map((user) =>
                        <li key={user.id}>Name : {user.name}
                            <ul>
                                <li key={user.id}>Age : {user.age}</li>
                            </ul>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default UserList