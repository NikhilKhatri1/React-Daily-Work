import React from 'react'

const TodoList = () => {
    return (
        <div className='border-2 sm:w-[450px] w-[330px] h-auto flex flex-col items-center rounded shadow-md bg-zinc-100'>
            <div className='py-2'>
                <p className='text-2xl font-semibold underline text-zinc-600'>Todo List</p>
            </div>
            <div className='shadow-md rounded-lg sm:h-[120px] w-[300px] sm:w-[420px] py-2 flex justify-between items-center border border-gray-400 px-2'>
                <input type="text" className='h-[40px] rounded-lg border bg-zinc-300 border-zinc-700' />
                <button className='h-[40px] rounded-lg border-2 border-sky-700 w-[90px] bg-sky-400'>Submit</button>
            </div>
            <div className='flex flex-col justify-center items-center py-2 rounded-lg shadow-lg w-[300px] sm:w-[420px] my-3 px-3'>
                <p className='text-2xl font-semibold text-slate-500'>List</p>
                <ul className='w-full'>
                    <li className='flex justify-between border'><div>Hello</div><div><button>x</button></div></li>
                </ul>
            </div>
        </div>
    )
}

export default TodoList