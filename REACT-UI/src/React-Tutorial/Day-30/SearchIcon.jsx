import React, { useState } from 'react'
import './SearchIconStyle.css'
import { FaSearch } from 'react-icons/fa'

const SearchIcon = () => {

    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState('#fff');

    const handleClick = (e) => {
        setBgColor('#1a1a1a')
        if (e.target.className === 'container') {
            setShowInput(false)
            setBgColor('#fff')
        }
    };
    return (
        <section onClick={handleClick} className='container' style={{ backgroundColor: bgColor }}>
            {
                showInput ? (
                    <input type="text" placeholder='Search....' />
                ) : (
                    <FaSearch onClick={() => setShowInput(true)} />
                )
            }
        </section>

    )
}

export default SearchIcon