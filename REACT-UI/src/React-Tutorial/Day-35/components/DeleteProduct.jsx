import React from 'react'
import { useDeleteProductMutation } from '../service/dummyData'
const DeleteProduct = ({ productId }) => {
    const [deleteProduct, { data, error, isLoading }] = useDeleteProductMutation()

    if (error) {
        return <h1>Error...</h1>
    }
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(productId)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>DeleteProduct</h1>
            <button
                className='btn-primary btn'
                disabled={isLoading}
                onClick={handleDeleteProduct}
            >Delete Product</button>
            <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
        </div>
    )
}

export default DeleteProduct