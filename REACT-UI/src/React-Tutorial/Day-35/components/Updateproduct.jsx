import React from 'react'
import { useUpdateProductMutation } from '../service/dummyData'
const Updateproduct = ({ productId }) => {
    const [updateProduct, { data, error, isLoading }] = useUpdateProductMutation()

    if (error) {
        return <h1>Error...</h1>
    }
    if (isLoading) {
        return <h1>Loading....</h1>
    }

    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {
                title: 'Title is Updated',
            }
            await updateProduct({ id: productId, updatedProduct: updatedProductData })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Updating Data</h1>
            <button className='btn btn-primary' onClick={handleUpdateProduct} disabled={isLoading}>Update Data</button>
            <h1>{data?.title}</h1>
        </div>
    )
}

export default Updateproduct