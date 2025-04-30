import React, { useState, useEffec } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import styles from './EditProduct.module.css'

const EditProduct = () => {
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3000/products/productDetails?id=${id}`)
    const [formData, setFromData] = useState(null)

    useEffect(() => {
        setFromData(data)
    }, [data])



    function onChangeFromData(e) {
        const { name, value } = e.target
        console.log('from data', name, value)
        setFromData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            {error && <p>Error fetching</p>}
            {isPending && <p>Loading</p>}
            {formData && <form className={styles.product_form}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={onChangeFromData} />
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={onChangeFromData} />
                <label htmlFor="stock">Stock:</label>
                <input type="number" id="stock" name="stock" value={formData.stock} onChange={onChangeFromData} />
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category_id" value={formData.category_id} onChange={onChangeFromData} />
                <label htmlFor="specs">Specs:</label>
                <textarea id="specs" name="specs" value={formData.specs} onChange={onChangeFromData} />
                <label htmlFor="warranty">Warranty:</label>
                <input type="number" id="warranty" name="warranty" value={formData.warranty} onChange={onChangeFromData} />
                <label htmlFor="desc">Description:</label>
                <textarea id="desc" name="description" value={formData.description} onChange={onChangeFromData} />
                <button type='submit'>Save changes</button>
            </form>}

        </div>
    )
}

export default EditProduct