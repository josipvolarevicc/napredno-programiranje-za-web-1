import React from 'react'
import styles from './CategoryForm.module.css'
import { useState } from 'react'



const CategoryForm = ({ formData, setFormData, resetFormData }) => {

    const [updateInProgress, setUpdateInProgress] = useState(false)
    const [formDataInvalid, setFormDataInvalid] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("form data:", formData)
        setUpdateInProgress(true)
        try {
            const response = await fetch("http://localhost:3000/categories", {
                method: formData.id ? 'PUT' : 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (response.status === 400) {
                setFormDataInvalid(true)
                return
            }
            setFormDataInvalid(false)
            if (!formData.id) {
                resetFormData()
            }
        } catch (error) {
            console.log('Error updating product:', error)
            setFormDataInvalid(false)
        } finally {
            setUpdateInProgress(false)
        }
    }

    return (
        <form className={styles.product_form} onSubmit={handleSubmit}>
            <fieldset disabled={updateInProgress}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                <button type='submit'>{updateInProgress ? 'Updating' : 'Save changes'}</button>
                {formDataInvalid && <p className={styles.invalid_form_data_p}>Form data invalid</p>}
            </fieldset>
        </form>
    )
}

export default CategoryForm