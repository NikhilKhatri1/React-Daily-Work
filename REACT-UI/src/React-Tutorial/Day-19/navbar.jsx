//Custom Component
import React from 'react'

function Navbar(props) {
    return (
        <nav className={`d-flex justify-content-between p-3 m-2 border border-1 ${props.theme}`}>
            <div className='fw-bold fs-5'><span>{props.title}</span></div>
            <div className='fs-5'>
                {
                    props.menuItems.map(item => <span key={item} className='mx-3'><a>{item}</a></span>)
                }
            </div>
            <div>
                <button className='btn btn-warning bi bi-person-circle'>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar;