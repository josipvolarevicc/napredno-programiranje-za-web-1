import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import CategoryForm from '../../components/categoryForm/CategoryForm'

const EditCategory = () => {
    console.log('component rerendered!!')
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3000/categories/categoryDetails?id=${id}`)
    const [formData, setFormData] = useState(null)

    useEffect(() => {
        setFormData(data)
    }, [data])

    return (
        <div>
            {isPending && <p>Loading category details</p>}
            {error && <p>Category not found</p>}
            {formData && <CategoryForm formData={formData} setFormData={setFormData} />}
        </div>
    )
}

export default EditCategory