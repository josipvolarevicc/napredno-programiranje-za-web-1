import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import styles from './editProduct.modules.css'

const EditProduct = () => {
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3000/products/productDetails?id=${id}`)

    return (
        <div>
            {error && <p>Error fetching</p>}
            {isPending && <p>Loading</p>}
            {data && <p>{data.name}</p>}
            <form className={styles.product_form}>
                    <label htmlFor="name">Name:</label>
                    <input type="text"id="name" name="name" />
                    <label htmlFor="name">Name:</label>
                    <input type="text"id="name" name="name" />
                    <label htmlFor="name">Name:</label>
                    <input type="text"id="name" name="name" />
                    <label htmlFor="name">Name:</label>
                    <input type="text"id="name" name="name" />
                    <label htmlFor="name">Name:</label>
                    <input type="text"id="name" name="name" />
                    <label htmlFor="name">Name:</label>
                    <input type="text"id="name" name="name" />
            </form>
        </div>
    )
}

export default EditProduct