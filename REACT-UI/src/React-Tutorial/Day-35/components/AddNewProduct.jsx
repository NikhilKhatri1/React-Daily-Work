import React from 'react'
import { useAddNewProductMutation } from '../service/dummyData'
const AddNewProduct = () => {
    const [addNewProduct, { data, error, isLoading }] = useAddNewProductMutation()

    if (error) {
        return <h1>Error...</h1>
    }
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    const handleAddProduct = async () => {
        try {
            const newProduct = {
                id: 1,
                title: "Bape T-Shirt",
                description: "New Design Products fro Mens/Womens",
            }
            await addNewProduct(newProduct)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='m-2'>
            <h1>Add new Product</h1>
            <button className='btn btn-primary' onClick={handleAddProduct} disabled={isLoading}>Add Product</button>
            <div>
                <h1>Product Detail</h1>
                <h1>{data?.id}</h1>
                <h1>{data?.title}</h1>
                <h1>{data?.description}</h1>
            </div>
        </div>
    )
}

export default AddNewProduct