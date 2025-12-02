import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const EditCategory = () => {
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3000/categories/categoryDetails?id=${id}`)

    return (
        <div>
            {isPending && <p>Loading category details</p>}
            {error && <p>Category not found</p>}
            {data && <p>{data.id}, {data.name}</p>}
        </div>
    )
}

export default EditCategory