import React from 'react'
import { Link } from 'react-router-dom'
import CategoriesList from '../../components/categoriesList/CategoriesList'

const dummyCategories = [
{id: 1, name: 'Consoles'},
  {id: 2, name: 'Displays'}
]
 


const Categories = () => {
  return (
    <div>
      <Link to='/addNewCategory'>Add New Categorie</Link>
      <CategoriesList categories={dummyCategories}/>
    </div>
  )
}

export default Categories