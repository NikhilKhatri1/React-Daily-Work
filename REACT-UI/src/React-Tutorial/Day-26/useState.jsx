import React, { useState } from 'react';

const UseState = () => {
    const [friends, setFriends] = useState(['Alice', 'Bob']);

    const handleRemove = () => {
        const friendToRemove = prompt("Enter the name to remove");
        const isPresent = friends.includes(friendToRemove)
        if (isPresent   ) {
            setFriends(friends.filter(friend => friend !== friendToRemove));
        }
        else {
            alert("Friend is not present")
        }
    };

    // const handleRemove = () => {
    //     const friendToRemove = prompt("Enter the name to remove");
    //     const index = friends.findIndex(friend => friend === friendToRemove);

    //     if (index !== -1) {
    //         // Friend is found, use splice to remove them
    //         const updatedFriends = [...friends]; // Create a copy of the array
    //         updatedFriends.splice(index, 1); // Remove the friend at the found index
    //         setFriends(updatedFriends); // Update the state with the new array
    //         console.log(`${friendToRemove} has been removed.`);
    //     } else {
    //         console.log(`${friendToRemove} is not in the friends list.`);
    //     }
    // };


    return (
        <div>
            <ul>
                {
                    friends.map((friend, index) => <li key={index}>{friend}</li>)
                }
            </ul>

            <button className='btn btn-primary me-2' onClick={() => setFriends([...friends, prompt("Enter new friend")])}>Add new Friend</button>

            <button className='btn btn-danger' onClick={handleRemove}>Remove a Friend</button>
        </div>
    );
}

export default UseState;
