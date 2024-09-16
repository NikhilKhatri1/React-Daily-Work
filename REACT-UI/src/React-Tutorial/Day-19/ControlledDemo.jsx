import React from 'react'
import Navbar from './navbar'

function ControlledDemo() {
  return (
    <div className='container-fluid'>
      <h2>Controlled Component</h2>
      <Navbar theme='bg-dark text-white' title='Shopper.' menuItems={['Home', 'Shop', 'Products', 'Docs']} logo='logo192' />
      <Navbar theme='bg-success text-dark' title='Flipkart' menuItems={['Home', 'Fashion', 'Mobile', 'Grocery']} logo='logo512' />
    </div>
  )
}

export default ControlledDemo;