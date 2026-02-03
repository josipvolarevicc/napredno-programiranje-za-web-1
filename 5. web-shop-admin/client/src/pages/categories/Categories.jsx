import React from 'react'
import { Link } from 'react-router-dom'
import CategoriesList from '../../components/categoriesList/CategoriesList'
import useFetch from '../../hooks/useFetch'

const Categories = () => {
  const { data, error, isPending } = useFetch('http://localhost:3000/categories')

  return (
    <div>
      <Link to={'/addNewCategory'}>Add new category</Link>
      {isPending && <p>Loading categories</p>}
      {error && <p>Error loading categories</p>}
      {data && <CategoriesList categories={data} />}
    </div>
  )
}

export default Categories