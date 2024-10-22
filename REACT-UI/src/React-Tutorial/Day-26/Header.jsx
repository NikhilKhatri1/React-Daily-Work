import React from 'react'

const Header = () => {
    return (
        <div className='flex text-md font-medium justify-between items-center bg-zinc-800 text-white md:px-10 md:py-2 h-20'>
            <button className='md:hidden'><span className='bi bi-list ms-1 me-2 text-white btn'></span></button>
            <h3 className='text-2xl md:text-2xl hover:text-blue-500 ms-[-70px] md:ms-0'>Logo</h3>
            <ul className='md:flex md:justify-start md:w-auto md:my-2 my-0 hidden'>
                <li className='md:mx-8 cursor-pointer hover:text-blue-600 text-2xl'>Home</li>
                <li className='md:mx-8 cursor-pointer hover:text-blue-600 text-2xl'>About</li>
                <li className='md:mx-8 cursor-pointer hover:text-blue-600 text-2xl'>Contact</li>
            </ul>
            <div className='flex'>
                <input className='md:w-[300px] w-[150px] rounded' type="text" />
                <button className='me-3 rounded bg-blue-400 ms-1 px-1 py-1'>Search</button>
            </div>
        </div>
    )
}

export default Header