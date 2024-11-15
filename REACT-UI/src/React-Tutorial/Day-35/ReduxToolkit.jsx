import React from 'react'
// import AddNewProduct from './components/AddNewProduct'
// import AllProducts from './components/AllProducts'
// import SpecificProduct from './components/SpecificProduct'
// import Updateproduct from './components/Updateproduct'
import DeleteProduct from './components/DeleteProduct'
const ReduxToolkit = () => {
    return (
        <div>
            {/* <AllProducts /> */}
            {/* <SpecificProduct /> */}
            {/* <AddNewProduct /> */}
            {/* <Updateproduct productId={2}/> */}
            <DeleteProduct productId={2} />
        </div>
    )
}

export default ReduxToolkit