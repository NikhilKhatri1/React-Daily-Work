import React, { useState } from 'react'

const Password = () => {
    const [isPassword, setIsPassword] = useState(true);

    return (
        <div className='m-4'>
            <h1>Password</h1>
            <div className='relative w-25 '>
                <input
                    type={isPassword ? 'password' : 'text'}
                    className='w-full px-2 py-2 border-2 border-gray-300 focus:outline-none rounded-2xl focus:border-blue-600 custom-shadow'
                    placeholder='Enter Password'
                />


                <button onClick={() => setIsPassword(!isPassword)} className='absolute border border-gray-700 left-[86%] z-1 top-[8px] px-1 rounded-full'>{isPassword ? 'Show' : 'Hide'}</button>
            </div>
            <style jsx>{`
  .custom-shadow:focus {
    box-shadow: inset 0 0 18px rgba(0, 0, 255, 0.2);
  }
`}</style>
        </div>
    )
}


export default Password